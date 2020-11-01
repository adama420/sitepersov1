var express = require("express");
var router = express.Router();
const twig = require("twig");

router.get("/", (requete, reponse) => {
    console.log("demande recue methode get sur slash")
    reponse.render("home.html.twig")
});

router.get("/about", (requete, reponse) => {
    console.log("demande recue avec la methode get sur about")
    reponse.render("about.html.twig")
});

router.get("/contact", (requete, reponse) => {
    console.log("demande recue avec la methode get sur contact")
    reponse.render("contact.html.twig")
});
router.get("/devis", (requete, reponse) => {
    console.log("demande recue avec la methode get sur devis")
    reponse.render("devis.html.twig")
});

router.post("/contact", (requete, reponse) => {
    console.log("demande recue avec la methode POSt sur contact")
    reponse.end("ok POSTT")
});

router.use((requete,reponse, suite)=>{
    const error = new Error("Page non trouvée");
    error.status = 404;
    console.log("ici");
    suite(error);
});

router.use((error,requete,suite) => {
    reponse.status(error.status || 500);
    reponse.end(error.message);
});

module.exports = router;