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
            .expect(201)
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

      describe('DELETE /api/categorie/delete/5', () => {
        it('Doit supprimer une categorie', (done) => {
          request.delete('/api/categorie/delete/6')
            .expect(200)
            .end((err, res) => {
                expect(res.body).to.be.an('string');
              done();
            });
        });
      });

      // test pour les routes de produits
      

});