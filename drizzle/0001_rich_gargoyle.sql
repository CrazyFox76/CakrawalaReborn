CREATE TABLE "cakra_point_rewards" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	"points" integer NOT NULL,
	"icon" varchar(10) NOT NULL,
	"tag" varchar(100) NOT NULL,
	"sort_order" integer DEFAULT 0,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "cakra_point_stats" (
	"id" serial PRIMARY KEY NOT NULL,
	"label" varchar(255) NOT NULL,
	"value" integer NOT NULL,
	"suffix" varchar(10) DEFAULT '',
	"sort_order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "vouchers" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" varchar(50) NOT NULL,
	"type" varchar(20) DEFAULT 'nominal' NOT NULL,
	"value" integer NOT NULL,
	"min_purchase" integer DEFAULT 0,
	"max_uses" integer DEFAULT 0,
	"used_count" integer DEFAULT 0,
	"expires_at" timestamp,
	"is_active" boolean DEFAULT true,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "vouchers_code_unique" UNIQUE("code")
);
