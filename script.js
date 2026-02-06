function calculateDiet() {
  const age = Number(document.getElementById("age").value);
  const weight = Number(document.getElementById("weight").value);
  const goal = document.getElementById("goal").value;
  const result = document.getElementById("result");

  if (!age || !weight) {
    alert("Please enter valid age and weight");
    return;
  }

  let calories = weight * 24;

  if (goal === "loss") calories -= 400;
  if (goal === "gain") calories += 400;

  let dietText = "";

  if (goal === "loss") {
    dietText = `
      <ul>
        <li>2 Multigrain Roti</li>
        <li>Dal / Chana / Rajma</li>
        <li>Green vegetables (Lauki, Bhindi, Spinach)</li>
        <li>Low-fat curd or buttermilk</li>
        <li>Fruits: Papaya, Apple</li>
        <li><strong>Avoid:</strong> Fried food, sweets, cold drinks</li>
      </ul>
    `;
  }

  if (goal === "maintain") {
    dietText = `
      <ul>
        <li>2 Roti + Small bowl rice</li>
        <li>Dal / Paneer / Eggs</li>
        <li>Seasonal sabzi</li>
        <li>Curd or chaas</li>
        <li>Handful nuts</li>
      </ul>
    `;
  }

  if (goal === "gain") {
    dietText = `
      <ul>
        <li>3 Roti + Rice</li>
        <li>Paneer / Milk / Curd</li>
        <li>Banana + Peanut Butter</li>
        <li>Dry fruits (Almonds, Cashew)</li>
        <li>1 tsp Ghee</li>
      </ul>
    `;
  }

  result.style.display = "block";
  result.innerHTML = `
    <h3>Your Indian Diet Plan</h3>
    <p><strong>Daily Calories Needed:</strong> ${calories} kcal/day</p>
    <p><strong>Recommended Foods:</strong></p>
    ${dietText}
  `;
}
