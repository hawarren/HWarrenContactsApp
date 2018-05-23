using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using HWarrenContactsApp.Models;

namespace HWarrenContactsApp.Controllers
{
    using System.IO;
    using System.Web;

    public class FileUploadsController : ApiController
    {
        private FileUploadContext db = new FileUploadContext();

        // GET: api/FileUploads
        public IQueryable<FileUpload> GetfileUpload()
        {
            return db.fileUpload;
        }

        // GET: api/FileUploads/5
        [ResponseType(typeof(FileUpload))]
        public async Task<IHttpActionResult> GetFileUpload(int id)
        {
            FileUpload fileUpload = await db.fileUpload.FindAsync(id);
            if (fileUpload == null)
            {
                return NotFound();
            }

            return Ok(fileUpload);
        }

        // PUT: api/FileUploads/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutFileUpload(int id, FileUpload fileUpload)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != fileUpload.imageid)
            {
                return BadRequest();
            }

            db.Entry(fileUpload).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FileUploadExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/FileUploads
        //[ResponseType(typeof(FileUpload))]
        //public async Task<IHttpActionResult> PostFileUpload(FileUpload fileUpload)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    db.fileUpload.Add(fileUpload);
        //    await db.SaveChangesAsync();

        //    return CreatedAtRoute("DefaultApi", new { id = fileUpload.imageid }, fileUpload);
        //}

        [HttpPost]
        public IHttpActionResult PostFileUpload()
        {
            if (HttpContext.Current.Request.Files.AllKeys.Any())
            {
                //Get the uploaded image from the Files collection
                var httpPostedFile = HttpContext.Current.Request.Files["UploadedImage"];
                if (httpPostedFile != null)
                {
                    FileUpload imgUpload = new FileUpload();
                    int length = httpPostedFile.ContentLength;
                    imgUpload.imagedata = new byte[length]; //get imagedata
                    httpPostedFile.InputStream.Read(imgUpload.imagedata, 0, length);
                    imgUpload.imagename = Path.GetFileName(httpPostedFile.FileName);
                    this.db.fileUpload.Add(imgUpload);
                    this.db.SaveChanges();
                    var fileSavePath = Path.Combine(
                        HttpContext.Current.Server.MapPath("~/UploadedFiles"),
                        httpPostedFile.FileName);
                    // Save the uploaded file to "UploadedFiles" folder
                    httpPostedFile.SaveAs(fileSavePath);
                    return this.Ok("Image Uploaded");
                }
            }
            return this.Ok("Image is not Uploaded");
        }

        // DELETE: api/FileUploads/5
        [ResponseType(typeof(FileUpload))]
        public async Task<IHttpActionResult> DeleteFileUpload(int id)
        {
            FileUpload fileUpload = await db.fileUpload.FindAsync(id);
            if (fileUpload == null)
            {
                return NotFound();
            }

            db.fileUpload.Remove(fileUpload);
            await db.SaveChangesAsync();

            return Ok(fileUpload);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool FileUploadExists(int id)
        {
            return db.fileUpload.Count(e => e.imageid == id) > 0;
        }
    }
}