export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  __InternalSupabase: {
    PostgrestVersion: "14.5";
  };
  public: {
    Tables: {
      centre_checklists: {
        Row: {
          centre_name: string;
          created_at: string;
          id: string;
          items: Json;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          centre_name?: string;
          created_at?: string;
          id?: string;
          items?: Json;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          centre_name?: string;
          created_at?: string;
          id?: string;
          items?: Json;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      oir_attempts: {
        Row: {
          completed_at: string;
          created_at: string;
          duration_seconds: number | null;
          id: string;
          paper: string;
          score: number;
          total_questions: number;
          user_id: string;
        };
        Insert: {
          completed_at?: string;
          created_at?: string;
          duration_seconds?: number | null;
          id?: string;
          paper: string;
          score: number;
          total_questions?: number;
          user_id: string;
        };
        Update: {
          completed_at?: string;
          created_at?: string;
          duration_seconds?: number | null;
          id?: string;
          paper?: string;
          score?: number;
          total_questions?: number;
          user_id?: string;
        };
        Relationships: [];
      };
      olq_journals: {
        Row: {
          confidence_score: number | null;
          created_at: string;
          entry: string;
          id: string;
          olq_tags: string[];
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          confidence_score?: number | null;
          created_at?: string;
          entry: string;
          id?: string;
          olq_tags?: string[];
          title: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          confidence_score?: number | null;
          created_at?: string;
          entry?: string;
          id?: string;
          olq_tags?: string[];
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      ppdt_attempts: {
        Row: {
          completed_at: string;
          created_at: string;
          id: string;
          picture_id: number | null;
          self_score: number | null;
          story: string;
          themes: string[];
          title: string;
          user_id: string;
        };
        Insert: {
          completed_at?: string;
          created_at?: string;
          id?: string;
          picture_id?: number | null;
          self_score?: number | null;
          story: string;
          themes?: string[];
          title: string;
          user_id: string;
        };
        Update: {
          completed_at?: string;
          created_at?: string;
          id?: string;
          picture_id?: number | null;
          self_score?: number | null;
          story?: string;
          themes?: string[];
          title?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      prep_plans: {
        Row: {
          created_at: string;
          id: string;
          reporting_date: string | null;
          start_date: string;
          status: string;
          target_board: string | null;
          target_entry: string | null;
          title: string;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          reporting_date?: string | null;
          start_date?: string;
          status?: string;
          target_board?: string | null;
          target_entry?: string | null;
          title?: string;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          reporting_date?: string | null;
          start_date?: string;
          status?: string;
          target_board?: string | null;
          target_entry?: string | null;
          title?: string;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          created_at: string;
          email: string | null;
          full_name: string | null;
          id: string;
          onboarding_completed: boolean;
          updated_at: string;
        };
        Insert: {
          avatar_url?: string | null;
          created_at?: string;
          email?: string | null;
          full_name?: string | null;
          id: string;
          onboarding_completed?: boolean;
          updated_at?: string;
        };
        Update: {
          avatar_url?: string | null;
          created_at?: string;
          email?: string | null;
          full_name?: string | null;
          id?: string;
          onboarding_completed?: boolean;
          updated_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;
type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
