<template>
    <div class="footer">
    <div class="footer-content">
        <div class="footer-logo">
            <img src="../assets/images/logo.png" alt="Nom du Blog">
        </div>
        <div class="footer-links">
            <ul>
                <li><a href="/Home">Accueil</a></li>
                <li><a href="/Articles">Articles</a></li>
                <li><a href="#">À propos</a></li>
                
            </ul>
        </div>
    </div>
    <div class="footer-bottom">
        <p>&copy; 2023 Blog. Tous droits réservés.</p>
    </div>
</div>

</template>


<style scoped>


.footer {
    background-color: #333;
    color: #fff;
    width: 100%;
  height: auto;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

   
}

.footer-content {
   
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.footer-logo img {
    max-width: 150px;
}

.footer-links ul {
    list-style: none;
    display: flex;
}

.footer-links li {
    margin-right: 20px;
}

.footer-links a {
    color: #fff;
    text-decoration: none;
}

.footer-bottom {
    background-color: #222;
    text-align: center;
    padding: 0;
   
}

.footer-bottom p {
    color: #888;
}






</style>