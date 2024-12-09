export interface Handlers {
  next?: (value: any) => void;
  error?: (value: any) => void;
  complete?: () => void;
}
