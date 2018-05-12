namespace HWarrenContactsApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class Initial2 : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.PhoneRecords", "Comments", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.PhoneRecords", "Comments");
        }
    }
}
