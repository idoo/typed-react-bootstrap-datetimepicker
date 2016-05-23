// requires react and moment

import * as React from 'react';
import * as moment from 'moment';

declare module "react-bootstrap-datetimepicker" {
    // Import React
    import DateTimeFieldProps = ReactBootstrapDateTimePicker.DateTimeFieldProps;

    // <DateTimeField />
    // ----------------------------------------
    interface DateTimeFieldClass extends React.ComponentClass<DateTimeFieldProps> { }
    var DateTimeField: DateTimeFieldClass;

    export = DateTimeField;
}

declare module ReactBootstrapDateTimePicker {
    interface DateTimeFieldProps extends React.Props<DateTimeField>{
        /*
          Represents the inital dateTime, this string is then parsed by moment.js
          Default: moment().format('x')
         */
        dateTime?:string
        /*
          Defines the format moment.js should use to parse and output the date to onChange
          Default: "x"
         */
        format?:string
        /*
          Defines the way the date is represented in the HTML input. It must be a format understanable by moment.js
          Default: "MM/DD/YY h:mm A"
         */
        inputFormat?:string
        /*
          Callback trigger when the date changes.
          x is the new datetime value in which represents Unix ms timestamp
          Default: function	x => console.log(x)
         */
        onChange?:(x: string) => void
        /*
          Whether today's date should be highlighted
          Default: true
         */
        showToday?:boolean
        /*
          Changes the size of the date picker input field. Sizes: "sm", "md", "lg"
          Default: "md"
         */
        size?:string
        /*
          Disables clicking on some days. Goes from 0 (Sunday) to 6 (Saturday).
          Default: []
         */
        daysOfWeekDisabled?:number[]
        /*
          The default view to display when the picker is shown. ('years', 'months', 'days')
          Default: 'days'
         */
        viewMode?:string|number
        /*
          Defines additional attributes for the input element of the component.
          Default: undefined
         */
        inputProps?:Object
        /*
          The earliest date allowed for entry in the calendar view.
          Default: undefined
         */
        minDate?:moment.Moment
        /*
          The latest date allowed for entry in the calendar view.
          Default: undefined
         */
        maxDate?:moment.Moment
        /*
          Allows to selectively display only the time picker ('time') or the date picker ('date')
          Default: undefined
         */
        mode?:string
        /*
          Sets the initial value. Could be an empty string, or helper text.
          Default: {dateTime}
         */
        defaultText?:string
      }
    }
    interface DateTimeField extends React.ReactElement<DateTimeFieldProps> { }
}
