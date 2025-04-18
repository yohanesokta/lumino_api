
import express from "express";
import { sendJson } from "../../utils/exepts";
import { containsSpecialChars } from "../../utils/exepts";
import {
  createNewCategorie,
  getCategory,
} from "../mentor.repository";

export const ClassCategoryRouter = express.Router()

ClassCategoryRouter.post("/", async (request, response) => {
    const name = request.body.name;
    const slug = request.body.name || name;
    const description = request.body.description;
    if (!name || !description) {
      response
        .status(400)
        .json(sendJson({ message: "all field cant be blank!" }));
      return;
    } else if (containsSpecialChars(name) || containsSpecialChars(description)) {
      response.status(400).json(
        sendJson({
          message: "cant contains special ( name & description) char",
        }),
      );
      return;
    } else {
      try {
        const data = await createNewCategorie({
          name,
          slug,
          description,
        });
        response.json(sendJson({ message: "success", data }));
      } catch (err) {
        if (err && typeof err == "object" && "code" in err) {
          if (err.code == "P2002") {
            response
              .status(400)
              .json(sendJson({ message: "product category already exist!" }));
            return;
          }
        }
        response.status(500).json(sendJson({ message: "internal server error" }));
      }
    }
  });
  
  ClassCategoryRouter.get("/", async (request, response) => {
    try {
      const data = await getCategory();
      response.json(sendJson({ message: "success", data }));
    } catch (error) {
      response.status(500).json(sendJson({ message: "internal server error" }));
    }
  });
  