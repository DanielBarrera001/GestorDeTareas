using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TareasMVC.Migrations
{
    /// <inheritdoc />
    public partial class AdminRol : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(@"
            IF NOT EXISTS (Select Id FROM AspNetRoles WHERE Id = '49da38b5-1a53-4507-9676-b756c26d31ba')
            BEGIN
            INSERT AspNetRoles(Id, [Name], [NormalizedName])
            VALUES ('49da38b5-1a53-4507-9676-b756c26d31ba', 'admin', 'ADMIN')
            END");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DELETE AspNetRoles WHERE Id = '49da38b5-1a53-4507-9676-b756c26d31b'");
        }
    }
}
