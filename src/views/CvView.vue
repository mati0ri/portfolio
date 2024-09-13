<template>
    <div class="cv">
      <div class="cv-container">
        <iframe src="../../public/Matéo_IORI_CV.pdf" width="150%" height="560px" frameborder="0"></iframe>
        <a :href="cvLink" download="Matéo_IORI_CV.pdf">
          <button>Télécharger le CV</button>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cvLink: "../../public/Matéo_IORI_CV.pdf",
      };
    }
  }
  </script>
  
  <style>
  .cv-container {
    text-align: center;
  }
  
  button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  
  @media (min-width: 1024px) {
    .about {
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  
    .cv-container {
      width: 70%;
    }
  }
  </style>
  