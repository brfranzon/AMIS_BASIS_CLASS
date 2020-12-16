

//
// TvsDataSet
//
// Common Dateset
//
export class TvsDataSet {

    //------ Properties (PRIVATE)
    private     m_data:                 JSON;

    //------ Properties (PUBLIC)
    public      FieldDefs:              TvsDataSetFieldDefinitions;


    constructor() { }


    //------ Methods (PUBLIC)

    //--------------------------------------------------------------------------
    // Method:  DeserializeFromJSON
    // Notes:   Converts a JSON to the FeldDefs object
    //--------------------------------------------------------------------------

    public DeserializeFromJSON(a_data: JSON) {
        // ...
    } // DeserializeFromJSON

} // TvsDataSet



//
// TvsDataSetFieldDefinition
//
// Common Dateset: Field definition
//
export class TvsDataSetFieldDefinition {

    public      FieldCaption:           String      = '';
    public      FieldName:              String      = '';

    constructor() { }

} // TvsDataSetFieldDefinition



//
// TvsDataSetFieldDefinitions
//
// Common Dateset: Container for field definitions
//
export class TvsDataSetFieldDefinitions {

    private     m_data:                 TvsDataSetFieldDefinition[];


    constructor() { }


    //------ Methods (PUBLIC)


    //--------------------------------------------------------------------------
    // Method:  Add
    // Notes:   Add a FieldDef item
    //--------------------------------------------------------------------------

    public Add(a_fd: TvsDataSetFieldDefinition) {
        // ... a_fd hinzufügen zu dem Array m_data
    } // Add


    //--------------------------------------------------------------------------
    // Method:  Clear
    // Notes:   Delete all FieldDef items
    //--------------------------------------------------------------------------

    public Clear() {
        this.m_data  = null;
    } // Clear

} // TvsDataSetFieldDefinitions


