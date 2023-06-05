//Errors
import DeclarationError from '../entities/Errors/DeclarationError';
import InternalError from '../entities/Errors/InternalError';

import { ValueType } from '../types/ValueType';

export default class Enviroment {
  public readonly envs: Map<string, Map<string, ValueType>>;
  public currentENV: string | undefined;

  public constructor() {
    this.envs = new Map();
    this.currentENV = undefined;
  }

  public createENV(id: string) {
    if(this.envs.has(id)) {
      const err = `There was an attempt to create an ENV that already exists!`;
      throw new DeclarationError(err, NaN, NaN, id);
    }
    this.envs.set(id, new Map());
  }

  public enterENV(id: string) {
    if(!this.envs.has(id)) {
      const err = `There was an attempt to enter into an invalid ENV!`;
      throw new InternalError(err, NaN, NaN);
    }

    this.currentENV = id;
    return true;
  }

  public exitENV() {
    this.currentENV = undefined;
    return true;
  }

  public insert(value: ValueType, name: string) {
    if(!this.currentENV || !this.envs.has(this.currentENV)) {
      const err = `There was an attempt to insert a value into an invalid ENV!`;
      throw new InternalError(err, NaN, NaN);
    }

    const env = this.envs.get(this.currentENV) as Map<string, ValueType>;
    
    const fetchValue = env.get(name)
    if(fetchValue) {
      const err = `There was an attempt to insert a value that already exists!`;
      throw new DeclarationError(err, NaN, NaN, name);
    }

    env.set(name, value)
    this.envs.set(this.currentENV, env);
  }

  public lookup(name: string, envId?: string) {
    envId ??= this.currentENV;
    if(!envId || !this.envs.has(envId)) {
      const err = `There was an attempt to lookup a value into an invalid ENV!`;
      throw new InternalError(err, NaN, NaN);
    }
    
    const env = this.envs.get(envId) as Map<string, ValueType>;
    return env.get(name)
  }

  public remove(name: string, envId?: string) {
    envId ??= this.currentENV;
    if(!envId || !this.envs.has(envId)) {
      const err = `There was an attempt to remove a value into an invalid ENV!`;
      throw new InternalError(err, NaN, NaN);
    }

    const value = this.lookup(name, envId);
    if(!value) {
      const err = `There was an attempt to remove a invalid value!`;
      throw new InternalError(err, NaN, NaN);
    }

    const env = this.envs.get(envId) as Map<string, ValueType>;
    env.delete(name)
    this.envs.set(envId, env)
  }
}