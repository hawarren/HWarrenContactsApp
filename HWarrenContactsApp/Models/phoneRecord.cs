﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;

namespace HWarrenContactsApp.Models
{

    public class PhoneRecord
    {
        public PhoneRecord()
        {
            this.relationshipType = new HashSet<relationshipType>();
        }

        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
        [Required]
        public string Email { get; set; }
        public int Phone { get; set; }
        public DateTimeOffset Birthdate { get; set; }
        public string MediaUrl { get; set; }

        public virtual ICollection<relationshipType> relationshipTypes { get; set; }


    }
}