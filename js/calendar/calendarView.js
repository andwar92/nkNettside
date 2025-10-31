
function calendarView() {
  return /*HTML*/ `
    <div class="calendar-container" style="display:flex; justify-content:center; padding:20px;">
      <iframe 
        src="https://calendar.google.com/calendar/embed?src=andersth%40getacademy.no&ctz=Europe%2FOslo"
        style="border:0; border-radius:12px;" 
        width="100%" 
        height="600" 
        frameborder="0" 
        scrolling="no">
      </iframe>
    </div>
  `;
}