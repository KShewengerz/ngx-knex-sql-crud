import { Request, Response, NextFunction } from 'express';
import * as uuid from 'uuid/v4';

import * as connection from '../../config/knex';

import { UserTable } from '@app/enums';
import { User } from '@app/interfaces';

const snakeCase = require('snakecase-keys');
const camelCase = require('camelcase-keys');

const db = connection.default;


/**
 * Adds new user
 * @api {post} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function addUser(req: Request, res: Response, next: NextFunction) {
  const body = snakeCase(req.body);
  
  body.id = uuid();
  
  await db(UserTable.Table)
    .insert(body)
    .catch(err => err);
  
  res.sendStatus(201);
}


/**
 * Update user's information
 * @api {put} /user
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */

export async function updateUser(req: Request, res: Response, next: NextFunction) {
  const id   = req.params.id;
  const body = snakeCase(req.body);
  
  await db(UserTable.Table)
    .where({ id })
    .update(body)
    .catch(err => err);
  
  res.sendStatus(200);
}


/**
 * Fetches all users
 * @api {get} /user
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getUsers(req: Request, res: Response, next: NextFunction) {
  const users          = await db(UserTable.Table).select();
  const result: User[] = camelCase(users);
  
  res.json(result);
}


/**
 * Fetches user's record
 * @api {get} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function getUser(req: Request, res: Response, next: NextFunction) {
  const id           = req.params.id;
  const fetchUser    = await db(UserTable.Table).where({ id });
  const result: User = camelCase(fetchUser);
  
  res.json(result);
}


/**
 * Deletes user record by id
 * @api {delete} /user/:id
 *
 * @apiParam {Uuid} id
 *
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 *
 * @returns {Promise<void>}
 */
export async function deleteUser(req: Request, res: Response, next: NextFunction) {
  const id = req.params.id;
  
  await db(UserTable.Table)
    .where({ id })
    .del()
    .catch(err => err);
  
  res.sendStatus(204);
}

