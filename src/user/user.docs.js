/**
 * @swagger
 * components:
 *  securitySchemes:
 *    bearerAuth:            
 *      type: http
 *      scheme: bearer
 *      bearerFormat: JWT
 *      name: Authorization
 *      in: header
 */


/**
 *  @swagger
 * /user/register:
 *  post:
 *      tags:
 *          - user
 *      summary: register api
 *      description: api untuk membuat user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           name:
 *                              type: string
 *                              example: ahmad pandu
 *                           email:
 *                              type: string
 *                              example: pandu@gmail.com
 *                           password:
 *                              type: string
 *                              example: Pandu@123
 *                           total_score:
 *                              type: integer
 *                              example: 10
 *                           bio:
 *                              type: string
 *                              example: Pandu@123
 *                           city:
 *                              type: string
 *                              example: Pandu@123
 *                           sosial_media_url:
 *                              type: string
 *                              example: Pandu@123
 * 
 *      responses:
 *              '200':
 *                 description: register sukses
 *                 content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                   name:
 *                                      type: string
 *                                      example: ahmad pandu
 *                                   email:
 *                                      type: string
 *                                      example: pandu@gmail.com
 *                                   password:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   total_score:
 *                                      type: integer
 *                                      example: 10
 *                                   bio:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   city:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   sosial_media_url:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   is_active:
 *                                      type: string
 *                                      example: nonactive
 *              '400':
 *                 description: register gagal email sudah terdaftar
 *                  
 */

/**
 *  @swagger
 * /user/update:
 *  put:
 *      tags:
 *          - user
 *      security: 
 *           - bearerAuth: []
 *      summary: update user
 *      description: api untuk update user menggunakan jwt token
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          name:
 *                             type: string
 *                             example: ahmad pandu
 *                          password:
 *                             type: string
 *                             example: Pandu@123
 *                          total_score:
 *                             type: integer
 *                             example: 10
 *                          bio:
 *                             type: string
 *                             example: Pandu@123
 *                          city:
 *                             type: string
 *                             example: Pandu@123
 *                          sosial_media_url:
 *                             type: string
 *                             example: Pandu@123
 *                          is_active:
 *                             type: string
 *                             example: nonactive 
 * 
 *      responses:
 *              '200':
 *                 description: update sukses
 *                 content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                   name:
 *                                      type: string
 *                                      example: ahmad pandu
 *                                   email:
 *                                      type: string
 *                                      example: pandu@gmail.com
 *                                   password:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   total_score:
 *                                      type: integer
 *                                      example: 10
 *                                   bio:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   city:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   sosial_media_url:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   is_active:
 *                                      type: string
 *                                      example: nonactive
 *              '400':
 *                 description: gagal update
 *                  
 */

/**
 * @swagger
 * /user/confirm?token=ddshdhdhdydyd:
 *  put:
 *    tags:
 *      - user
 *    summary: api confirmasi register dari email
 *    parameters:
 *        - in : query
 *          name: token
 *          required: true
 *          schema: 
 *              type: string
 *          description: konfirmasi token
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   name:
 *                      type: string
 *                      example: ahmad pandu
 *                   email:
 *                      type: string
 *                      example: pandu@gmail.com
 *                   password:
 *                      type: string
 *                      example: Pandu@123
 *                   total_score:
 *                      type: integer
 *                      example: 10
 *                   bio:
 *                      type: string
 *                      example: Pandu@123
 *                   city:
 *                      type: string
 *                      example: Pandu@123
 *                   sosial_media_url:
 *                      type: string
 *                      example: Pandu@123
 *                   is_active:
 *                      type: string
 *                      example: active
 */

/**
 * @swagger
 * /user/reset?token=ddshdhdhdydyd:
 *  put:
 *    tags:
 *      - user
 *    summary: api confirmasi lupa password
 *    parameters:
 *        - in : query
 *          name: token
 *          required: true
 *          schema: 
 *              type: string
 *          description: konfirmasi token
 *    requestBody:
 *        required: true
 *        content:
 *            application/json:
 *                schema:
 *                    type: object
 *                    properties:
 *                        forgetToken:
 *                           type: string
 *                           example: ahmad pandu
 *    responses:
 *      '200':
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                   name:
 *                      type: string
 *                      example: ahmad pandu
 *                   email:
 *                      type: string
 *                      example: pandu@gmail.com
 *                   password:
 *                      type: string
 *                      example: Pandu@123
 *                   total_score:
 *                      type: integer
 *                      example: 10
 *                   bio:
 *                      type: string
 *                      example: Pandu@123
 *                   city:
 *                      type: string
 *                      example: Pandu@123
 *                   sosial_media_url:
 *                      type: string
 *                      example: Pandu@123
 *                   is_active:
 *                      type: string
 *                      example: active
 */

/**
 *  @swagger
 * /user/forget:
 *  post:
 *      tags:
 *          - user
 *      summary: send mail forget password
 *      description: mengirimkan link untuk forget password
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           email:
 *                              type: string
 *                              example: ahmad pandu
 *      responses:
 *              '200':
 *                 description: email has sent
 *              '400':
 *                 description:user not found
 *                  
 */

/**
 *  @swagger
 * /user/score:
 *  put:
 *      tags:
 *          - user
 *      security: 
 *           - bearerAuth: []
 *      summary: update score
 *      description: api untuk mengubah score user
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                           score:
 *                              type: integer
 *                              example: 10
 *      responses:
 *              '200':
 *                 description: register sukses
 *                 content: 
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              properties:
 *                                   name:
 *                                      type: string
 *                                      example: ahmad pandu
 *                                   email:
 *                                      type: string
 *                                      example: pandu@gmail.com
 *                                   password:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   total_score:
 *                                      type: integer
 *                                      example: 10
 *                                   bio:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   city:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   sosial_media_url:
 *                                      type: string
 *                                      example: Pandu@123
 *                                   is_active:
 *                                      type: string
 *                                      example: nonactive
 *              '400':
 *                 description: register gagal email sudah terdaftar
 *                  
 */