using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HWarrenContactsApp.Models
{
    using System.Data.Entity;

    public class PhoneRecordDb : DbContext
    {
        public DbSet<PhoneRecord> PhoneRecords { get; set; }
    }

}