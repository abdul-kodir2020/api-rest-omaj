//dépendances nécessaires
const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');

const app = require('..');




const request = supertest(app);


describe('API Tests', () => {
    // test pour les routes de categorie
    describe('GET /api/categorie/categories', () => {
      it('Doit retourner un tableau de categorie', (done) => {
        request.get('/api/categorie/categories')
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.be.an('array');
            done();
          });
      });
    });

    describe('GET /api/categorie/categorie/1', () => {
        it('Doit retourner une categorie', (done) => {
          request.get('/api/categorie/categorie/1')
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.be.an('object');
              done();
            });
        });
    });

    describe('POST /api/categorie/create', () => {
        it('Doit créer une nouvelle categorie', (done) => {
          const categorie = {
            nom: "montre"
          };
    
          request.post('/api/categorie/create')
            .send(categorie)
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('id');
              expect(res.body.nom).to.equal(categorie.nom);
              done();
            });
        });
    });

      describe('PUT /api/categorie/update/2', () => {
        it('Doit modifier une categorie', (done) => {
          const categorie = {
            nom: "haut"
          };
    
          request.put('/api/categorie/update/2')
            .send(categorie)
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('id');
              expect(res.body.nom).to.equal(categorie.nom);
              done();
            });
        });
      });

      describe('DELETE /api/categorie/delete/2', () => {
        it('Doit supprimer une categorie', (done) => {
          request.delete('/api/categorie/delete/2')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('string');
              done();
            });
        });
      });

      // test pour les routes de produits

      describe('GET /api/produit/produits?categorie=veste', () => {
      it('Doit retourner un tableau de produits', (done) => {
        request.get('/api/produit/produits?categorie=veste')
          .expect(200)
          .end((err, res) => {
            expect(res.body).to.be.an('array');
            console.log(res.body)
            done();
          });
      });
    });

    describe('GET /api/produit/produit/1', () => {
        it('Doit retourner un produit', (done) => {
          request.get('/api/produit/produit/1')
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.be.an('object');
              done();
            });
        });
    });

    describe('POST /api/produit/create', () => {
        it('Doit créer un nouveau produit', (done) => {
          const produit = {
            libelle: "veste en laine zara",
            marque: "zara",
            taille: "40",
            quantite: 1,
            prix: 36,
            status: "accepte",
            categorie_id: 1
          };
    
          request.post('/api/produit/create')
            .send(produit)
            .expect(200)
            .end((err, res) => {
              expect(res.body).to.have.property('id');
              expect(res.body.libelle).to.equal(produit.libelle);
              done();
            });
        });
    });

    describe('PUT /api/produit/update/2', () => {
        it('Doit modifier un produit', (done) => {
            const produit = {
                libelle: "veste rose en jean zara",
                marque: "zara",
                taille: "40",
                quantite: 1,
                prix: 36,
                status: "accepte",
                categorie_id: 1
              };
    
          request.put('/api/produit/update/2')
            .send(produit)
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('object');
              done();
            });
        });
      });

    describe('DELETE /api/produit/delete/5', () => {
        it('Doit supprimer un produit', (done) => {
          request.delete('/api/produit/delete/5')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('string');
              done();
            });
        });
      });
});