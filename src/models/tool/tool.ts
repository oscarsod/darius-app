export interface ToolModel {
  id: number;
  title: string;
  description: string;
  imageURL: string;
}

export interface ToolFace {
  id: number;
  name: string;
  address?: string;
  longitude: string;
  latitude: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}
