function dashboardView() {
   let dashboardHTML = /*HTML*/`
   <div class="container">
      <div class="box">
      <h1 class="title"style="color:#a0f0a0">Psykologisk Trygghet</h1>
         <div class="content">bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets bla bla bla, skal bare teste litt lesbarhet med hvit eller grå tekst. så må bare ha litt skrift for å se hva som er lettets</div>
         <div class="tagBox">Signaturstyrker</div>
         </div>
      <div class="box">
         <h1 class="title"style="color:#fff4ac">${model.data.assignmentPage.title}</h1>
         <div class="content">${model.data.assignmentPage.description}</div>
         <div class="gruppebox">${model.data.assignmentPage.tag}</div>
      </div>
   </div>
    `;
   return dashboardHTML;
}
