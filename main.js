function computerPlay() {
   //pertama kita akan membuat array terlebih dahulu
   const choices = ["rock", "paper", "scissors"];
   //lalu kita buat variable yang nilainya itu bakalan acak antara angka 0,1,2
   //caranya yaitu dengan menggunakan metode Math
   const randomIndex = Math.floor(Math.random() * choices.length);
   //lalu setelah itu, kita panggil array di variable choices dengan indexnya berasal dari variable randomIndex
   return choices[randomIndex];
   //karena randomIndex berisi nilai acak antara 0, 1, dan 2 maka secara otomatis function ini dapat mengembalikan nilai dari choices secara acak
   //kalau masih bingung, coba ingat kembali ini. di array, index dimulai dari 0 bukan 1
   //jadi itu index arraynya adalah 0,1,2.
}

//kemudian kita membuat function yang parameternya itu 2
function playRound(playerSelection, computerSelection) {
   playerSelection = playerSelection.toLowerCase();
   //setelah kita membuat variable playerSelection, maka kita jadikan dulu nilainya agar menjadi lowercase.
   //kenapa lowercase?, itu karena agar ketika user menginputkan nilai, maka nilai yang diinput akan tidak terpengaruh oleh besar dan kecil

   //kemudian kita akan membuat if else untuk membuat perbandingan
   if (
      //jika variable playerSelection bernilai rock dan computerSelection bernilai scissors
      (playerSelection === "rock" && computerSelection === "scissors") || //atau
      //jika variable playerSelection bernilai paper dan computerSelection bernilai rock
      (playerSelection === "paper" && computerSelection === "rock") || //atau
      //jika variable playerSelection bernilai scissors dan computerSelection bernilai paper
      (playerSelection === "scissors" && computerSelection === "paper")
   ) {
      //ketika keadaan perbandingannya benar maka return dibawah ini akan dijalankan
      return "You win! " + playerSelection + " beats " + computerSelection;
   } else if (playerSelection === computerSelection) {
      //jika playerSelection dan computerSelection bernilai sama
      //maka return dibawah ini akan dijalankan.
      return "It's a tie! You both chose " + playerSelection;
   } else {
      //dan ketika jawaban kita tidak ada yang sama dengan pengkodisian diatas, maka return dibawah ini akan dijalankan
      return "You lose! " + computerSelection + " beats " + playerSelection;
   }
}

function game() {
   //kemudian kita akan membuat variable yang bertujuan untuk menyimpan skor kita ketika bertanding dengan computer nantinya
   let playerScore = 0;
   let computerScore = 0;
   let roundResult;

   //dan lalu kita akan membuat pengulangan
   //i sama dengan 0, apakah i kurang dari 5?, jika kurang dari 5 maka tingkatkan i
   for (let i = 0; i < 5; i++) {
      //kemudian kita membuat variable yang isinya nanti adalah prompt yang betanya ke user untuk memilih antara batu, gunting, atau kertas.
      const playerSelection = prompt("Choose rock, paper, or scissors");
      //kemudian kita juga akan membuat variable yang nilainya itu berupa nilai dari function computerPlay()
      const computerSelection = computerPlay();
      //lalu kita akan mengasih nilai pada variable roundResult dengan function yang argumentnya akan berisi variable playerSelection dan computerSelection.
      roundResult = playRound(playerSelection, computerSelection);

      //lalu kita tampilkan nilai dari variable roundResult ke console
      console.log(roundResult);

      //kita juga akan membuat sebuah pengkodisian lagi
      if (roundResult.includes("win")) {
         //jadi pertama, kita akan mencari apakah di variable roundResult terdapat string 'win'?
         //kalau iya maka playerScore akan ditambahkan 1.
         playerScore++;
      } else if (roundResult.includes("lose")) {
         //lalu kemudian, kita juga akan mencari apakah ada string yang bertuliskan lose di roundResult?
         //kalau iya maka computerScore akan ditambahkan 1.
         computerScore++;
      }
   }

   //kemudian, kita akan menampilkan ke consol score kita
   console.log("Final Scores");
   console.log("Player: " + playerScore);
   console.log("Computer: " + computerScore);

   //kemudian untuk menentukan pemenang, maka kita akan membuat pengkodisian lagi
   if (playerScore > computerScore) {
      //jika playerScore lebih besar dari computerScore
      //maka console akan mencetak You win the game!
      console.log("You win the game!");
   } else if (playerScore < computerScore) {
      //jika playerScore lebih kecil dari computerScore
      //maka console akan mencetak You lose the game!
      console.log("You lose the game!");
   } else {
      //dan jika tidak lebih besar atau lebih kecil berarti sama dong.
      //maka kita tampilkan ke console It's a tie game!
      console.log("It's a tie game!");
   }
}

//untuk menjalankan game ini, kita harus panggil function game()
game();
