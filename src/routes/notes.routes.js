const { Router } = require("express"); 

const NotesController = require("../controllers/NotesController"); 

const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const notesRoutes = Router( ); 
const notesController = new NotesController(); 

notesRoutes.post('/', notesController.create); 
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);
notesRoutes.get('/', notesController.index);
notesRoutes.use(ensureAuthenticated);


module.exports = notesRoutes; 