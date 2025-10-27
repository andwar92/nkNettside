function assignmentView() {
    let assignmentHTML = /*HTML*/`
    
    <div class="container">
    <h1 style="align-items:center;">Growth Mindset</h1>
        <form>
         <P class="box">Boks 1</p>
         <input type="text" id="assignmentText" placeholder="text" oninput="pushAssignment(this.value)" />
         <option value="">
        </form>
      </div>
    `;
    return assignmentHTML;
};