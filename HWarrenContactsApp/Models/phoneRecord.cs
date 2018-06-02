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
        public int? FileUploadId { get; set; }
        [AllowHtml]
        public string Comments { get; set; }

        //public virtual ICollection<relationshipType> relationshipTypes { get; set; }

        public virtual FileUpload FileUpload { get; set; }

    }



}