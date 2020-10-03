using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using EmpleadosAngular.Models;

namespace EmpleadosAngular.Data
{
    public class EmpleadosContext : DbContext
    {
        public EmpleadosContext (DbContextOptions<EmpleadosContext> options)
            : base(options)
        {
        }

        public DbSet<Empleat> Empleats { get; set; }
    }
}
