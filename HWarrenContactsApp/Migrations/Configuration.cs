namespace HWarrenContactsApp.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    using HWarrenContactsApp.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<HWarrenContactsApp.Models.PhoneRecordsDb>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(HWarrenContactsApp.Models.PhoneRecordsDb context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
            context.PhoneRecords.Add(new PhoneRecord
                                         {
                                             Id = 1,
                                             FirstName = "Seedy1",
                                             LastName = "McSeedy1",
                                             Email = "Seedy1@McSeedy1@gmail.com"
                                         });
        }
    }
}
