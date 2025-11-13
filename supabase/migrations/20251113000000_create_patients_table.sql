-- Create patients table for MyWay CRM system
CREATE TABLE IF NOT EXISTS patients (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),

    -- Personal information
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    pesel VARCHAR(11),
    date_of_birth DATE,

    -- Contact information
    street_address VARCHAR(200),
    city VARCHAR(100),
    postal_code VARCHAR(10),
    phone VARCHAR(20),
    email VARCHAR(100),

    -- Emergency contact
    emergency_contact_name VARCHAR(200),
    emergency_contact_phone VARCHAR(20),
    emergency_contact_relation VARCHAR(100),

    -- Medical information
    diagnosis TEXT,
    therapy_type VARCHAR(100),
    admission_date DATE,
    discharge_date DATE,

    -- Additional information
    notes TEXT,

    -- Contract information
    contract_number VARCHAR(50),
    contract_date DATE,

    -- Timestamps
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster searches
CREATE INDEX IF NOT EXISTS idx_patients_last_name ON patients(last_name);
CREATE INDEX IF NOT EXISTS idx_patients_pesel ON patients(pesel);
CREATE INDEX IF NOT EXISTS idx_patients_admission_date ON patients(admission_date);

-- Enable Row Level Security
ALTER TABLE patients ENABLE ROW LEVEL SECURITY;

-- Create policy to allow all operations (you can customize this later)
CREATE POLICY "Enable all access for authenticated users" ON patients
    FOR ALL
    USING (true)
    WITH CHECK (true);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_patients_updated_at
    BEFORE UPDATE ON patients
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
