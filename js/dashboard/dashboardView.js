function dashboardView() {
   const latestAssignment = model.data.assignmentPage[model.data.assignmentPage.length - 1];
   
   let dashboardHTML = /*HTML*/`
   <div class="container">
   <div class="box">
   <h1 class="title"style="color:white">Psykologisk Trygghet</h1>
   <div class="content">
Stress kan skapes av så mye forskjellig, og noe som du blir stressa av kan andre ta med knusende ro og motsat
Snakk sammen i teamet og del med hverandre:
   - hva som kan skape stress for deg
   - kom det fram situasjoner som skapte stress for en av dere men ikke for noen andre?
   - Hva kan være grunnen til det i så fal
Det er også veldig ulik og forskjellig hvordan vi reagerer, tenker og oppfører oss under stres
Hvor godt kjenner du deg selv?
   - hvordan kjenner du at du er stressa
   - hvordan du tror du kan oppleves når du er stressa
   <div class="assignment-date">05.011.2025</div>
         </div>
         <div class="tagBox">Stress</div>
         </div>
      <div class="box">
         <h1 class="title">${latestAssignment.title}</h1>
         <div class="content">${latestAssignment.description}</div>
         <div class="tagBox">${latestAssignment.subject}</div>
         <div class="assignment-date">${latestAssignment.date}</div>
      </div>
   </div>
    `;
   return dashboardHTML;
}
