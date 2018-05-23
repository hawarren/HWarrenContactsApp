using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Data.Entity;

namespace HWarrenContactsApp.Models
{
    using System.Web.Mvc;

    public class PhoneRecord
    {
       // public PhoneRecord()
        //{
          //  this.relationshipTypes = new HashSet<relationshipType>();
        //}


        public int Id { get; set; }

        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        public int? Phone { get; set; }

        [DisplayFormat(DataFormatString = "{0:MM/dd/yyyy}", ApplyFormatInEditMode = true)]
        public DateTimeOffset? Birthdate { get; set; }
        public string MediaUrl { get; set; }
        [AllowHtml]
        public string Comments { get; set; }

        //public virtual ICollection<relationshipType> relationshipTypes { get; set; }


    }

    //public class PhoneRecordsDb : DbContext
    //{
    //public DbSet<PhoneRecord> PhoneRecords { get; set; }
    //}

}