using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using EmpleadosAngular.Data;
using EmpleadosAngular.Models;

namespace EmpleadosAngular.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class EmpleatsController : ControllerBase
    {
        private readonly EmpleadosContext _context;
        private readonly IDataRepository<Empleat> _repo;

        public EmpleatsController(EmpleadosContext context,IDataRepository<Empleat> repo)
        {
            _context = context;
            _repo = repo;
        }

        // GET: api/Empleats
        [HttpGet]
        public IEnumerable<Empleat> GetEmpleats()
        {
            return _context.Empleats.OrderByDescending(p => p.Id);
        }

        // GET: api/Empleats/5
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmpleat([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var empleat = await _context.Empleats.FindAsync(id);

            if (empleat == null)
            {
                return NotFound();
            }

            return Ok(empleat);
        }

        // PUT: api/Empleats/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutEmpleat([FromRoute] long id, [FromBody] Empleat empleat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != empleat.Id)
            {
                return BadRequest();
            }

            _context.Entry(empleat).State = EntityState.Modified;

            try
            {
                _repo.Update(empleat);
                var save = await _repo.SaveAsync(empleat);
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmpleatExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Empleats
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<IActionResult> PostEmpleat([FromBody] Empleat empleat)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            _repo.Add(empleat);
            var save = await _repo.SaveAsync(empleat);

            return CreatedAtAction("GetEmpleat", new { id = empleat.Id }, empleat);
        }

        // DELETE: api/Empleats/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteEmpleat([FromRoute] long id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var empleat = await _context.Empleats.FindAsync(id);
            if (empleat == null)
            {
                return NotFound();
            }

            _repo.Delete(empleat);
            var save = await _repo.SaveAsync(empleat);

            return Ok(empleat);
        }

        private bool EmpleatExists(long id)
        {
            return _context.Empleats.Any(e => e.Id == id);
        }
    }
}
