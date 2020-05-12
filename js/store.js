import { writable } from "svelte/store";
import { FileService } from "./File.service";
export const viewMode = writable(""); // 'edit' or 'view'
export const currentFile = writable(FileService.getFileConfig());
