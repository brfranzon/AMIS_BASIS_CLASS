
import { TvsDataSetFieldDefinition }            from './vsDataSet';



//
// TvsViewConfig
//
// View: Configuration
//
export class TvsViewConfig {

    //------ Properties (PUBLIC)
    public      UserID:                 String;
    public      ViewID:                 String;
    public      FieldDefs:              TvsViewFieldDefinitions;


    constructor() { }

} // TvsViewConfig



//
// TvsViewFieldDefinition
//
// View: Field definition
//
export class TvsViewFieldDefinition extends TvsDataSetFieldDefinition {

    //------ Properties (PRIVATE)
    
    // ./.


    //------ Properties (PUBLIC)
    public      FieldIdx:               number      = 0;
    public      FieldVisible:           boolean     = true;


    // ...

} // TvsDataSetFieldDefinition



//
// TvsViewFieldDefinitions
//
// View: Container for field definitions
//
export class TvsViewFieldDefinitions {

    constructor() { }

    // ...

} // TvsViewFieldDefinitions


