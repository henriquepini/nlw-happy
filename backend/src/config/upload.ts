import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;

      cb(null, fileName);
    }
  }),
}


// export default {
//   storage: multer.diskStorage({
//     destination: path.join(__dirname, '..', '..', 'uploads'),
//     filename: (request, file, cb) => {
//       const trimmedFileName = file.originalname.replace(/\s+/g, '');
//       const fileName = `${Date.now()}-${trimmedFileName}`;

//       cb(null, fileName);
//     }
//   }),
// }