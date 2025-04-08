<template>
  <v-container fluid class="portfolio-container">
    <!-- Header con fondo sólido en lugar de imagen -->
    <v-sheet
      color="primary"
      height="300"
      class="rounded-lg mb-8 d-flex flex-column justify-center align-center"
    >
      <div class="d-flex flex-column fill-height justify-center align-center text-white">
        <h1 class="text-h2 font-weight-bold text-center portfolio-title mb-4">Adrián Vázquez </h1>
        <span class="text-h6 font-weight-regular">Desenvolupador d'Aplicacions Multiplataforma</span>
      </div>
    </v-sheet>

    <!-- Navegación rápida (ahora desfijada como solicitado) -->
    <v-card class="mb-10 navigation-card" elevation="2">
      <v-card-text>
        <div class="d-flex flex-wrap justify-space-around">
          <a href="#objectiu" class="nav-btn text-black text-decoration-none px-4 py-2 mx-2 d-flex align-center">
            <v-icon class="mr-2">mdi-target</v-icon> Objectiu
          </a>
          <a href="#sobremi" class="nav-btn text-black text-decoration-none px-4 py-2 mx-2 d-flex align-center">
            <v-icon class="mr-2">mdi-account</v-icon> Sobre Mi
          </a>
          <a href="#ipops" class="nav-btn text-black text-decoration-none px-4 py-2 mx-2 d-flex align-center">
            <v-icon class="mr-2">mdi-puzzle</v-icon> IPOPs
          </a>
          <a href="#marca" class="nav-btn text-black text-decoration-none px-4 py-2 mx-2 d-flex align-center">
            <v-icon class="mr-2">mdi-star</v-icon> Marca Personal
          </a>
        </div>
      </v-card-text>
    </v-card>

    <!-- 1. Objectiu del portfoli -->
    <section id="objectiu" class="mb-12">
      <v-sheet class="section-container pa-6 rounded-lg" elevation="1">
        <div class="d-flex align-center mb-6">
          <v-avatar color="primary" size="48" class="mr-4">
            <v-icon color="white" size="28">mdi-target</v-icon>
          </v-avatar>
          <h1 class="text-h4 font-weight-bold text-black">Objectiu del Portfoli</h1>
        </div>
        <p class="text-body-1 text-black">
          Aquest portfoli té com a objectiu mostrar el meu recorregut acadèmic i professional, reflexionar sobre les meves competències,
          i destacar el meu creixement com a futur professional en el sector tecnològic.
        </p>
      </v-sheet>
    </section>

    <!-- 2. Sobre mi -->
    <section id="sobremi" class="mb-12">
      <v-sheet class="section-container pa-6 rounded-lg" elevation="1">
        <div class="d-flex align-center mb-6">
          <v-avatar color="primary" size="48" class="mr-4">
            <v-icon color="white" size="28">mdi-account</v-icon>
          </v-avatar>
          <h2 class="text-h4 font-weight-bold text-black">Sobre mi</h2>
        </div>
        <v-row>
          <v-col cols="12" md="4">
            <v-avatar
              size="300"
              class="mx-auto d-block"
            >
              <v-img
                src="../assets/Perfil.png"
                alt="Adrián Vázquez"
                cover
              ></v-img>
            </v-avatar>
            <div class="text-center mt-4">
            </div>
          </v-col>
          <v-col cols="12" md="8">
            <p class="text-body-1 mb-4 text-black">
              Em dic Adrián Vázquez Vázquez, estudiant de Desenvolupament d'Aplicacions Multiplataforma.
              Sóc apassionat del món del desenvolupament, m'encanta aprendre coses noves i crear solucions útils amb codi.
            </p>
          </v-col>
        </v-row>
      </v-sheet>
    </section>

    <!-- 3. i 4. Activitats IPOP organitzades per apartats -->
    <section id="ipops" class="mb-12">
      <v-sheet class="section-container pa-6 rounded-lg" elevation="1">
        <div class="d-flex align-center mb-6">
          <v-avatar color="primary" size="48" class="mr-4">
            <v-icon color="white" size="28">mdi-puzzle</v-icon>
          </v-avatar>
          <h2 class="text-h4 font-weight-bold text-black">Activitats IPOP</h2>
        </div>

        <v-row>
          <!-- Perfil Professional -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="ipop-card h-100">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">
                  <v-icon start color="primary" class="mr-2">mdi-account-tie</v-icon>
                  Perfil Professional (IPOP 1)
                </v-card-title>
              </v-card-item>
              <v-card-text class="text-body-1">
                Descripció breu de l'activitat 1, centrada en definir el perfil professional i els objectius de futur.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <a href="/assets/ipops/ipop1.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-4 py-2 text-decoration-none rounded">
                  <v-icon class="mr-2">mdi-file-pdf-box</v-icon>
                  Veure IPOP 1
                </a>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Autoconeixement -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="ipop-card h-100">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">
                  <v-icon start color="primary" class="mr-2">mdi-brain</v-icon>
                  Àrea d'autoconeixement (IPOP 2)
                </v-card-title>
              </v-card-item>
              <v-card-text class="text-body-1">
                Activitat relacionada amb l'anàlisi personal, punts forts, febleses, valors i motivacions.
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <a href="/assets/ipops/ipop2.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-4 py-2 text-decoration-none rounded">
                  <v-icon class="mr-2">mdi-file-pdf-box</v-icon>
                  Veure IPOP 2
                </a>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Àmbits d'especialització -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="ipop-card h-100">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">
                  <v-icon start color="primary" class="mr-2">mdi-layers</v-icon>
                  Àmbits d'especialització (IPOP 3 i 4)
                </v-card-title>
              </v-card-item>
              <v-card-text class="text-body-1">
                Exploració de diferents rols i sortides professionals del cicle, així com els interessos personals.
              </v-card-text>
              <v-card-actions>
                <div class="d-flex gap-2">
                  <a href="/assets/ipops/ipop3.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 3
                  </a>
                  <a href="/assets/ipops/ipop4.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 4
                  </a>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Itinerari formatiu -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="ipop-card h-100">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">
                  <v-icon start color="primary" class="mr-2">mdi-school</v-icon>
                  Itinerari formatiu (IPOP 5 i 8)
                </v-card-title>
              </v-card-item>
              <v-card-text class="text-body-1">
                Activitats sobre la planificació d'estudis, cicles, universitat i formació complementària.
              </v-card-text>
              <v-card-actions>
                <div class="d-flex gap-2">
                  <a href="/assets/ipops/ipop5.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 5
                  </a>
                  <a href="/assets/ipops/ipop8.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 8
                  </a>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Mercat laboral -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="ipop-card h-100">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">
                  <v-icon start color="primary" class="mr-2">mdi-briefcase</v-icon>
                  Mercat laboral (IPOP 6 i 7)
                </v-card-title>
              </v-card-item>
              <v-card-text class="text-body-1">
                Activitats d'investigació sobre ofertes de feina, portals web i perfils professionals més sol·licitats.
              </v-card-text>
              <v-card-actions>
                <div class="d-flex gap-2">
                  <a href="/assets/ipops/ipop6.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 6
                  </a>
                  <a href="/assets/ipops/ipop7.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 7
                  </a>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>

          <!-- Promoció personal -->
          <v-col cols="12" md="6" lg="4">
            <v-card class="ipop-card h-100">
              <v-card-item>
                <v-card-title class="text-h6 font-weight-bold">
                  <v-icon start color="primary" class="mr-2">mdi-account-star</v-icon>
                  Promoció personal (IPOP 9, 10 i 11)
                </v-card-title>
              </v-card-item>
              <v-card-text class="text-body-1">
                Creació de currículum, carta de presentació i simulació d'entrevista per preparar l'accés al món laboral.
              </v-card-text>
              <v-card-actions>
                <div class="d-flex gap-2 flex-wrap">
                  <a href="/assets/ipops/ipop9.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 9
                  </a>
                  <a href="/assets/ipops/ipop10.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 10
                  </a>
                  <a href="/assets/ipops/ipop11.pdf" target="_blank" class="btn-pdf d-flex align-center btn-primary px-3 py-2 text-decoration-none rounded">
                    <v-icon class="mr-1">mdi-file-pdf-box</v-icon>
                    IPOP 11
                  </a>
                </div>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
    </section>

    <!-- 6. Marca personal -->
    <section id="marca" class="mb-12">
      <v-sheet class="section-container pa-6 rounded-lg" elevation="1">
        <div class="d-flex align-center mb-6">
          <v-avatar color="primary" size="48" class="mr-4">
            <v-icon color="white" size="28">mdi-star</v-icon>
          </v-avatar>
          <h2 class="text-h4 font-weight-bold text-black">Marca personal</h2>
        </div>
        <v-row>
          <v-col cols="12" md="8">
            <p class="text-body-1 text-black">
              Aquest portfoli està dissenyat amb un estil minimalista, net i modern que reflecteix la meva manera de treballar:
              clara, organitzada i enfocada en els detalls.
            </p>
            <div class="d-flex flex-wrap gap-4 mt-6">
              <a href="https://github.com/adrvazvaz" target="_blank" class="chip-link">
                <v-chip color="primary" variant="outlined" class="d-flex align-center">
                  <v-icon class="mr-2">mdi-github</v-icon> GitHub
                </v-chip>
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" class="chip-link">
                <v-chip color="primary" variant="outlined" class="d-flex align-center">
                  <v-icon class="mr-2">mdi-linkedin</v-icon> LinkedIn
                </v-chip>
              </a>
              <a href="adrianvazvaz.2117@gmail.com" class="chip-link">
                <v-chip color="primary" variant="outlined" class="d-flex align-center">
                  <v-icon class="mr-2">mdi-email</v-icon> Correu
                </v-chip>
              </a>
            </div>
          </v-col>
          <v-col cols="12" md="4" class="d-flex justify-center align-center">
            <!-- Logo como texto estilizado en lugar de imagen -->
            <div class="logo-placeholder d-flex justify-center align-center">
              <span class="text-h3 font-weight-bold">
                <span class="text-primary">{</span>
                <span>AV</span>
                <span class="text-primary">}</span>
              </span>
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </section>

    <!-- Footer -->
    <v-footer class="bg-primary mt-8 rounded-lg">
      <v-row justify="center" align="center" class="py-4">
        <span class="text-center text-white">&copy; {{ new Date().getFullYear() }} - Adrián Vázquez Vázquez - Portfolio Professional</span>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script setup>
import { ref } from 'vue';

// Ya no necesitamos la variable ipopLinks
const searchIPOP = ref('');

// Eliminamos el método scrollTo ya que ahora usamos enlaces nativos
</script>

<style scoped>
/* Variables de colores (personaliza según tus preferencias) */
:root {
  --primary-color: #3f51b5;
  --secondary-color: #f5f5f5;
  --text-color: #000; /* Cambiado a negro como solicitado */
  --accent-color: #ff4081;
  --hover-color: #e8eaf6;
}

/* Estilos generales */
.portfolio-container {
  max-width: 1400px !important;
  margin: 0 auto;
  color: var(--text-color);
}

.section-container {
  border-radius: 12px;
  transition: all 0.3s ease;
  background-color: white;
}

.section-container:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.portfolio-title {
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Estilos para las cards de IPOP */
.ipop-card {
  transition: all 0.3s ease;
  border-radius: 12px;
  height: 100%;
}

.ipop-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.ipop-card .v-card-title {
  border-bottom: 1px solid #eee;
  padding-bottom: 12px;
}

/* Estilos para la navegación (desfijada como solicitado) */
.navigation-card {
  position: relative; /* Cambiado de sticky a relative */
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.95);
}

.nav-btn {
  border-radius: 20px;
  padding: 0 16px;
  min-width: 120px;
  color: #000 !important; /* Aseguramos que el texto sea negro */
  transition: all 0.3s ease;
}

.nav-btn:hover {
  background-color: rgba(63, 81, 181, 0.1);
  text-decoration: none !important;
}

.nav-btn .v-icon {
  color: #000 !important; /* Aseguramos que los iconos sean negros */
}

/* Estilos para el buscador */
.search-field {
  border-radius: 20px;
}

/* Estilos para los textos (ahora en negro) */
h1, h2, h3, h4 {
  color: #000; /* Cambiado para títulos principales */
}

p {
  line-height: 1.8;
  font-size: 1.05rem;
  color: #000; /* Asegurando que todos los párrafos sean negros */
}

/* Estilos para enlaces PDF */
.btn-pdf {
  background-color: #3f51b5;
  color: white !important;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-pdf:hover {
  background-color: #303f9f;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none !important;
}

.btn-primary {
  background-color: #3f51b5;
  color: white !important;
}

/* Estilos para el logo placeholder */
.logo-placeholder {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilos para enlaces de redes sociales */
.chip-link {
  text-decoration: none;
  transition: all 0.3s ease;
}

.chip-link:hover {
  transform: translateY(-2px);
}

/* Animaciones */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

section {
  animation: fadeIn 0.8s ease forwards;
}

/* Media queries para responsividad */
@media (max-width: 960px) {
  .nav-btn {
    min-width: auto;
    padding: 0 12px;
  }
}

@media (max-width: 600px) {
  .portfolio-title {
    font-size: 2rem !important;
  }
}
</style>
