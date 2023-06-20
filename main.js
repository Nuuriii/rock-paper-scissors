// Mendapatkan elemen tombol dengan id rock, paper, dan scissors
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

// Mendapatkan elemen div untuk menampilkan hasil
const resultDiv = document.querySelector("#result");

// Mendefinisikan array pilihan
const choices = ["rock", "paper", "scissors"];

// Mendefinikan variabel untuk skor
let playerScore = 0;
let computerScore = 0;
let round = 0;

// Menambahkan event listener untuk setiap tombol
rockBtn.addEventListener("click", () => playRound("rock"));
paperBtn.addEventListener("click", () => playRound("paper"));
scissorsBtn.addEventListener("click", () => playRound("scissors"));

// Fungsi untuk memainkan satu ronde
function playRound(playerChoice) {
   round++;

   // Mengahasilkan pilihan komputer sacara acak
   const computerChoice = choices[Math.floor(Math.random() * choices.length)];

   // Menentukan hasil ronde
   let roundResult = "";
   if (playerChoice === computerChoice) {
      roundResult = "Draw";
   } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
   ) {
      roundResult = "You Win!";
      playerScore++;
   } else {
      roundResult = "Computer wins";
      computerScore++;
   }

   // Menampilkan hasil ronde
   resultDiv.innerHTML += `<br>Round ${round}: ${playerChoice} vs ${computerChoice} = ${roundResult}`;

   // Menampilkan skor setelah 5 ronde
   if (round === 5) {
      resultDiv.innerHTML += `<br><br>Final Score: You ${playerScore} - ${computerScore} Computer`;
      rockBtn.disabled = true;
      paperBtn.disabled = true;
      scissorsBtn.disabled = true;
   }
}
