import {userHandlers, searchHandlers } from './userHandler';

const handlers = [
  ...userHandlers,
  ...searchHandlers
];

export default handlers;
