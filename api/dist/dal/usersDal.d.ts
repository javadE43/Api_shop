import { Transaction } from "sequelize";
import { RoleUsers, UpdateUser, UserAttributesOutput, UserInput } from "../models/bo/User.js";
export declare const create: (payload: UserInput, t: Transaction) => Promise<boolean>;
export declare const update: (id: number, payload: UpdateUser, t: Transaction) => Promise<boolean>;
export declare const getAllUsers: (offset: number, limit: number, condition: string | null, role: string | null) => Promise<UserAttributesOutput | boolean>;
export declare const getByIdUser: (id: number, t?: Transaction) => Promise<RoleUsers | boolean>;
export declare const getByUsernameAndEmail: (username: string, email: string) => Promise<RoleUsers | boolean>;
export declare const deleteById: (id: number) => Promise<boolean>;
export declare const removeMultipleUsers: (ids: number[]) => Promise<boolean>;
export declare const UpdateActiveUser: (id: number, active: boolean) => Promise<boolean>;
export declare const LogOutUser: (id: number, refreshToken: string) => Promise<boolean>;
