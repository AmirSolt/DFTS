export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      movies: {
        Row: {
          embeddings: string | null
          id: number
          image_id: string | null
          title: string | null
        }
        Insert: {
          embeddings?: string | null
          id?: number
          image_id?: string | null
          title?: string | null
        }
        Update: {
          embeddings?: string | null
          id?: number
          image_id?: string | null
          title?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      search_movies: {
        Args: {
          query_embedding: string
          match_threshold: number
          match_count: number
        }
        Returns: {
          title: string
          image_id: string
          similarity: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
