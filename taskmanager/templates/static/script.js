document.addEventListener("DOMContentLoaded", function () {
    // sidenav initialization
    let sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav);

    // datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elems, {
        format:	"dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // category selector initialization
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
});