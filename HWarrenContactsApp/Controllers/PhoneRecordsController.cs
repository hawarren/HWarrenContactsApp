using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
    using System.IO;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.Http;
using System.Web.Http.Description;
using HWarrenContactsApp.Models;
using HWarrenContactsApp.helpers;
using System.Web.Mvc;

namespace HWarrenContactsApp.Controllers
{



    public class PhoneRecordsController : ApiController
    {
        private PhoneRecordDb db = new PhoneRecordDb();

        // GET: api/PhoneRecords
        public IQueryable<PhoneRecord> GetPhoneRecords()
        {
            return db.PhoneRecords;
        }

        // GET: api/PhoneRecords/5
        [ResponseType(typeof(PhoneRecord))]
        public IHttpActionResult GetPhoneRecord(int id)
        {
            PhoneRecord phoneRecord = db.PhoneRecords.Find(id);
            if (phoneRecord == null)
            {
                return NotFound();
            }

            return Ok(phoneRecord);
        }

        // PUT: api/PhoneRecords/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPhoneRecord(int id, PhoneRecord phoneRecord)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != phoneRecord.Id)
            {
                return BadRequest();
            }

            db.Entry(phoneRecord).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PhoneRecordExists(id))
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

        // POST: api/PhoneRecords
        [ResponseType(typeof(PhoneRecord))]
        public IHttpActionResult PostPhoneRecord(PhoneRecord phoneRecord, HttpPostedFileBase image)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (ModelState.IsValid)
            {

                if (ImageUploadValidator.IsWebFriendlyImage(image))
                {
                    var fileName = Path.GetFileName(image.FileName);
                    image.SaveAs(Path.Combine(System.Web.HttpContext.Current.Server.MapPath("~/Uploads/"), fileName));
                    phoneRecord.MediaUrl = "/Uploads/" + fileName;
                }

                db.PhoneRecords.Add(phoneRecord);
            db.SaveChanges();
            }

            return CreatedAtRoute("DefaultApi", new { id = phoneRecord.Id }, phoneRecord);
        }

        // DELETE: api/PhoneRecords/5
        [ResponseType(typeof(PhoneRecord))]
        public IHttpActionResult DeletePhoneRecord(int id)
        {
            PhoneRecord phoneRecord = db.PhoneRecords.Find(id);
            if (phoneRecord == null)
            {
                return NotFound();
            }

            db.PhoneRecords.Remove(phoneRecord);
            db.SaveChanges();

            return Ok(phoneRecord);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PhoneRecordExists(int id)
        {
            return db.PhoneRecords.Count(e => e.Id == id) > 0;
        }
    }
}