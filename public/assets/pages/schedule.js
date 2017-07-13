window.app = new Vue({
    el: '#app',
    data: function() {
        let today = new Date();
        let y = today.getFullYear();
        let m = today.getMonth();
        let d = today.getDate();

        return {
            message: 'Hello World',
            tasks: [
                { id: '1', name: 'Booking Entry', par: 3, dateTime: moment().add(1, 'day').format("MM/DD AHH:mm") },
                { id: '2', name: 'ETD Check', par: 4, dateTime: moment().add(-2, 'day').format("MM/DD AHH:mm") },
                { id: '3', name: 'Container Entry', par: 5, dateTime: moment().add(3, 'day').format("MM/DD AHH:mm") },
                { id: '4', name: 'Mark & Description Entry', par: 3, dateTime: moment().add(2, 'day').format("MM/DD AHH:mm") },
                { id: '5', name: 'Freight Entry', par: 5, dateTime: moment().add(1, 'day').format("MM/DD AHH:mm") },
                { id: '6', name: 'Work Order Entry', par: 4, dateTime: moment().add(-3, 'day').format("MM/DD AHH:mm") },
            ],
            // events: [
            //     {
            //         title: 'All Day Event',
            //         start: new Date(y, m, 1),
            //         className: 'event-default'
            //     },
            //     {
            //         id: 999,
            //         title: 'Repeating Event',
            //         start: new Date(y, m, d - 4, 6, 0),
            //         allDay: false,
            //         className: 'event-rose'
            //     },
            //     {
            //         id: 999,
            //         title: 'Repeating Event',
            //         start: new Date(y, m, d + 3, 6, 0),
            //         allDay: false,
            //         className: 'event-rose'
            //     },
            //     {
            //         title: 'Meeting',
            //         start: new Date(y, m, d - 1, 10, 30),
            //         allDay: false,
            //         className: 'event-green'
            //     },
            //     {
            //         title: 'Lunch',
            //         start: new Date(y, m, d + 7, 12, 0),
            //         end: new Date(y, m, d + 7, 14, 0),
            //         allDay: false,
            //         className: 'event-red'
            //     },
            //     {
            //         title: 'Md-pro Launch',
            //         start: new Date(y, m, d - 2, 12, 0),
            //         allDay: true,
            //         className: 'event-azure'
            //     },
            //     {
            //         title: 'Birthday Party',
            //         start: new Date(y, m, d + 1, 19, 0),
            //         end: new Date(y, m, d + 1, 22, 30),
            //         allDay: false,
            //         className: 'event-azure'
            //     },
            //     {
            //         title: 'Click for Creative Tim',
            //         start: new Date(y, m, 21),
            //         end: new Date(y, m, 22),
            //         url: 'http://dounets.com/',
            //         className: 'event-orange'
            //     },
            //     {
            //         title: 'Click for Google',
            //         start: new Date(y, m, 21),
            //         end: new Date(y, m, 22),
            //         url: 'http://dounets.com/',
            //         className: 'event-orange'
            //     }
            // ],
            header: {
                left: 'title',
                center: '',
                right: '',
            }
        }
    },
    components: {
        'full-calendar': VueFullCalendar,
    },
    computed: {
      events() {
        return this.tasks.map(function(task) {
          return {
            id: task.id,
            title: task.name,
            start: moment(task.dateTime, "MM/DD AHH:mm"),
            allDay: true,
            className: 'event-orange'
          };
        });
      }
    }
});

function initFullCalendar() {
    let today = new Date();
    let y = today.getFullYear();
    let m = today.getMonth();
    let d = today.getDate();
    // color classes: [ event-blue | event-azure | event-green | event-orange | event-red ]
    let events = [
        {
            title: 'All Day Event',
            start: new Date(y, m, 1),
            className: 'event-default'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d - 4, 6, 0),
            allDay: false,
            className: 'event-rose'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: new Date(y, m, d + 3, 6, 0),
            allDay: false,
            className: 'event-rose'
        },
        {
            title: 'Meeting',
            start: new Date(y, m, d - 1, 10, 30),
            allDay: false,
            className: 'event-green'
        },
        {
            title: 'Lunch',
            start: new Date(y, m, d + 7, 12, 0),
            end: new Date(y, m, d + 7, 14, 0),
            allDay: false,
            className: 'event-red'
        },
        {
            title: 'Md-pro Launch',
            start: new Date(y, m, d - 2, 12, 0),
            allDay: true,
            className: 'event-azure'
        },
        {
            title: 'Birthday Party',
            start: new Date(y, m, d + 1, 19, 0),
            end: new Date(y, m, d + 1, 22, 30),
            allDay: false,
            className: 'event-azure'
        },
        {
            title: 'Click for Creative Tim',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'http://dounets.com/',
            className: 'event-orange'
        },
        {
            title: 'Click for Google',
            start: new Date(y, m, 21),
            end: new Date(y, m, 22),
            url: 'http://dounets.com/',
            className: 'event-orange'
        }
    ];
    let $calendar = $('#fullCalendar');
    let $weekCalendar = $('#weekCalendar');

    // $calendar.fullCalendar({
    //   viewRender: function (view, element) {
    //     // We make sure that we activate the perfect scrollbar when the view isn't on Month
    //     if (view.name != 'month') {
    //       $(element).find('.fc-scroller').perfectScrollbar();
    //     }
    //   },
    //   header: {
    //     left: 'title',
    //     // center: 'month,agendaWeek,agendaDay',
    //     right: 'prev,next,today'
    //   },
    //   defaultDate: today,
    //   selectable: true,
    //   selectHelper: true,
    //   views: {
    //     month: { // name of view
    //       titleFormat: 'MMMM YYYY'
    //       // other view-specific options here
    //     },
    //     week: {
    //       titleFormat: " MMMM D YYYY"
    //     },
    //     day: {
    //       titleFormat: 'D MMM, YYYY'
    //     }
    //   },

    //   // defaultView: 'agendaWeek',

    //   select: function (start, end) {

    //     // on select we show the Sweet Alert modal with an input
    //     swal({
    //       title: 'Create an Event',
    //       html: '<div class="form-group">' +
    //       '<input class="form-control" placeholder="Event Title" id="input-field">' +
    //       '</div>',
    //       showCancelButton: true,
    //       confirmButtonClass: 'btn btn-success',
    //       cancelButtonClass: 'btn btn-danger',
    //       buttonsStyling: false
    //     }).then(function (result) {

    //       var eventData;
    //       event_title = $('#input-field').val();

    //       if (event_title) {
    //         eventData = {
    //           title: event_title,
    //           start: start,
    //           end: end
    //         };
    //         $calendar.fullCalendar('renderEvent', eventData, true); // stick? = true
    //       }

    //       $calendar.fullCalendar('unselect');

    //     });
    //   },
    //   editable: true,
    //   eventLimit: true, // allow "more" link when too many events

    //   events: events,
    // });

    // $weekCalendar.fullCalendar({
    //   defaultDate: today,
    //   defaultView: 'agendaWeek',
    //   events: events,
    // });
}

$(document).ready(function() {
    initFullCalendar();
});
