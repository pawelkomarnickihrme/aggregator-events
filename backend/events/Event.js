const { Text, CalendarDay, Checkbox } = require('@keystonejs/fields');

module.exports = {
    fields: {
      // existing fields
      title: {
        type: Text,
        isRequired: true,
      },
      start: {
        type: CalendarDay,
        dateFrom: new Date().toISOString('YYYY-MM-DD').substring(0, 10),
        dateTo: '2029-01-01',
        isRequired: true,
        defaultValue: new Date().toISOString('YYYY-MM-DD').substring(0, 10), // Today's date
      },

      location: {
        type: Checkbox,
        defaultValue: true,
      },
      // added fields
      description: {
        type: Text,
        isRequired: true,
      },
      assignee: {
        type: Text,
        isRequired: true,
        isMultiline:true,
      },
    },
}