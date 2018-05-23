using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HWarrenContactsApp.Models
{
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;

    public class FileUpload
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int imageid { get; set; }

        public string imagename { get; set; }

        public byte[] imagedata { get; set; }
            //this property is used to insert image info in byte format
    }
}