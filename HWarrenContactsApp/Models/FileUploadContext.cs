using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HWarrenContactsApp.Models
{
    using System.Data.Entity;
    public class FileUploadContext: DbContext
    {
        public FileUploadContext()
            : base("name=PhoneRecordsDB")
        {
        }
        public DbSet <FileUpload> fileUpload { get; set; }
    }
}