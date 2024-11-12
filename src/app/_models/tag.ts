export class Tag {
    static readonly ANGULAR = new Tag('Angular', 'red');
    static readonly TYPESCRIPT = new Tag('TypeScript', 'blue');
    static readonly JAVASCRIPT = new Tag('JavaScript', 'gold');
    static readonly JAVA = new Tag('Java', 'green');
    static readonly CSHARP = new Tag('C#', 'orange');
    static readonly PLSQL = new Tag('PLSQL', 'brown');
    static readonly ORACLEDB = new Tag('Oracle DB', 'purple');
    static readonly POSTGRESQL = new Tag('Postgresql', 'darkred');
    static readonly AWSCODEDEPLOY = new Tag('AWS Code Deploy', 'limegreen');
    static readonly AWSCODEPIPELINE = new Tag('AWS Code Pipeline', 'olive');
    static readonly DATADOG = new Tag('Datadog', 'crimson');
    static readonly AWSCLOUDWATCH = new Tag('AWS Cloudwatch', 'gray');

    private constructor(private readonly key: string, public readonly color: string){

    }

    toString(){
        return this.key;
    }
}