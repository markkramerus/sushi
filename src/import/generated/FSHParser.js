// Generated from FSH.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var FSHListener = require('./FSHListener').FSHListener;
var FSHVisitor = require('./FSHVisitor').FSHVisitor;

var grammarFileName = "FSH.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003L\u0280\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004+\t+\u0004",
    ",\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u00041\t1\u00042\t2\u0004",
    "3\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u00048\t8\u00049\t9\u0004",
    ":\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004?\t?\u0004@\t@\u0004",
    "A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0004F\tF\u0004G\tG\u0004",
    "H\tH\u0003\u0002\u0007\u0002\u0092\n\u0002\f\u0002\u000e\u0002\u0095",
    "\u000b\u0002\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003\u00a2\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005\u00ac",
    "\n\u0005\r\u0005\u000e\u0005\u00ad\u0003\u0005\u0007\u0005\u00b1\n\u0005",
    "\f\u0005\u000e\u0005\u00b4\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0007\u0006\u00b9\n\u0006\f\u0006\u000e\u0006\u00bc\u000b\u0006",
    "\u0003\u0006\u0007\u0006\u00bf\n\u0006\f\u0006\u000e\u0006\u00c2\u000b",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0005",
    "\u0007\u00c9\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b",
    "\u0003\b\u0003\b\u0003\b\u0005\b\u00d4\n\b\u0003\t\u0003\t\u0003\t\u0007",
    "\t\u00d9\n\t\f\t\u000e\t\u00dc\u000b\t\u0003\t\u0007\t\u00df\n\t\f\t",
    "\u000e\t\u00e2\u000b\t\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0005",
    "\n\u00e9\n\n\u0003\u000b\u0003\u000b\u0005\u000b\u00ed\n\u000b\u0003",
    "\f\u0003\f\u0003\f\u0006\f\u00f2\n\f\r\f\u000e\f\u00f3\u0003\r\u0003",
    "\r\u0003\r\u0003\r\u0005\r\u00fa\n\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0007\u000e\u00ff\n\u000e\f\u000e\u000e\u000e\u0102\u000b\u000e\u0003",
    "\u000e\u0007\u000e\u0105\n\u000e\f\u000e\u000e\u000e\u0108\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u010d\n\u000f\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u0112\n\u0010\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u0117\n\u0011\f\u0011\u000e\u0011",
    "\u011a\u000b\u0011\u0003\u0011\u0007\u0011\u011d\n\u0011\f\u0011\u000e",
    "\u0011\u0120\u000b\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0005\u0012",
    "\u0125\n\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u012a",
    "\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0006\u0014\u012f\n\u0014",
    "\r\u0014\u000e\u0014\u0130\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u0136\n\u0015\u0003\u0016\u0003\u0016\u0003\u0016\u0007\u0016",
    "\u013b\n\u0016\f\u0016\u000e\u0016\u013e\u000b\u0016\u0003\u0016\u0007",
    "\u0016\u0141\n\u0016\f\u0016\u000e\u0016\u0144\u000b\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0017\u0005\u0017\u014b\n",
    "\u0017\u0003\u0018\u0003\u0018\u0005\u0018\u014f\n\u0018\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a\u0003\u001b",
    "\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001d",
    "\u0003\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003!\u0003!\u0003!\u0003",
    "\"\u0003\"\u0003\"\u0007\"\u016f\n\"\f\"\u000e\"\u0172\u000b\"\u0003",
    "\"\u0003\"\u0005\"\u0176\n\"\u0003#\u0003#\u0003#\u0003$\u0003$\u0003",
    "$\u0003%\u0003%\u0003%\u0003%\u0007%\u0182\n%\f%\u000e%\u0185\u000b",
    "%\u0003&\u0003&\u0003&\u0003&\u0007&\u018b\n&\f&\u000e&\u018e\u000b",
    "&\u0003&\u0003&\u0005&\u0192\n&\u0003&\u0006&\u0195\n&\r&\u000e&\u0196",
    "\u0003\'\u0003\'\u0003\'\u0005\'\u019c\n\'\u0003\'\u0003\'\u0003\'\u0005",
    "\'\u01a1\n\'\u0003(\u0003(\u0003(\u0005(\u01a6\n(\u0003(\u0003(\u0003",
    "(\u0005(\u01ab\n(\u0003)\u0003)\u0003)\u0003)\u0003)\u0003)\u0007)\u01b3",
    "\n)\f)\u000e)\u01b6\u000b)\u0003*\u0003*\u0003*\u0003*\u0003*\u0003",
    "*\u0007*\u01be\n*\f*\u000e*\u01c1\u000b*\u0003+\u0003+\u0005+\u01c5",
    "\n+\u0003+\u0003+\u0003+\u0003+\u0007+\u01cb\n+\f+\u000e+\u01ce\u000b",
    "+\u0003,\u0003,\u0005,\u01d2\n,\u0003,\u0003,\u0003,\u0003,\u0003-\u0003",
    "-\u0005-\u01da\n-\u0003-\u0003-\u0003-\u0005-\u01df\n-\u0003-\u0005",
    "-\u01e2\n-\u0003.\u0003.\u0003.\u0003.\u0003/\u0003/\u0005/\u01ea\n",
    "/\u0003/\u0003/\u0005/\u01ee\n/\u00030\u00030\u00050\u01f2\n0\u0003",
    "0\u00030\u00030\u00060\u01f7\n0\r0\u000e0\u01f8\u00030\u00030\u0003",
    "0\u00030\u00030\u00050\u0200\n0\u00031\u00031\u00031\u00031\u00051\u0206",
    "\n1\u00032\u00032\u00032\u00032\u00052\u020c\n2\u00032\u00032\u0003",
    "2\u00052\u0211\n2\u00052\u0213\n2\u00033\u00033\u00033\u00034\u0003",
    "4\u00034\u00074\u021b\n4\f4\u000e4\u021e\u000b4\u00034\u00034\u0005",
    "4\u0222\n4\u00035\u00035\u00035\u00075\u0227\n5\f5\u000e5\u022a\u000b",
    "5\u00035\u00035\u00036\u00036\u00036\u00056\u0231\n6\u00037\u00037\u0003",
    "8\u00038\u00038\u00038\u00038\u00058\u023a\n8\u00039\u00039\u0003:\u0003",
    ":\u0003;\u0003;\u0003<\u0003<\u0003=\u0003=\u0003>\u0003>\u0003>\u0003",
    ">\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0003>\u0005>\u0252",
    "\n>\u0003?\u0003?\u0003?\u0005?\u0257\n?\u0003?\u0003?\u0007?\u025b",
    "\n?\f?\u000e?\u025e\u000b?\u0003@\u0003@\u0005@\u0262\n@\u0003A\u0003",
    "A\u0003A\u0005A\u0267\nA\u0003B\u0003B\u0003B\u0003C\u0003C\u0003C\u0003",
    "C\u0003D\u0003D\u0005D\u0272\nD\u0003E\u0003E\u0003F\u0003F\u0005F\u0278",
    "\nF\u0003G\u0003G\u0003H\u0003H\u0005H\u027e\nH\u0003H\u0002\u0002I",
    "\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c",
    "\u001e \"$&(*,.02468:<>@BDFHJLNPRTVXZ\\^`bdfhjlnprtvxz|~\u0080\u0082",
    "\u0084\u0086\u0088\u008a\u008c\u008e\u0002\n\u0003\u00029:\u0003\u0002",
    "+,\u0004\u000244II\u0004\u000200II\u0003\u0002\u0018\u001d\u0003\u0002",
    "\u001f\"\u0003\u0002BC\u0003\u0002)*\u0002\u02a8\u0002\u0093\u0003\u0002",
    "\u0002\u0002\u0004\u00a1\u0003\u0002\u0002\u0002\u0006\u00a3\u0003\u0002",
    "\u0002\u0002\b\u00a8\u0003\u0002\u0002\u0002\n\u00b5\u0003\u0002\u0002",
    "\u0002\f\u00c8\u0003\u0002\u0002\u0002\u000e\u00d3\u0003\u0002\u0002",
    "\u0002\u0010\u00d5\u0003\u0002\u0002\u0002\u0012\u00e8\u0003\u0002\u0002",
    "\u0002\u0014\u00ec\u0003\u0002\u0002\u0002\u0016\u00ee\u0003\u0002\u0002",
    "\u0002\u0018\u00f9\u0003\u0002\u0002\u0002\u001a\u00fb\u0003\u0002\u0002",
    "\u0002\u001c\u010c\u0003\u0002\u0002\u0002\u001e\u0111\u0003\u0002\u0002",
    "\u0002 \u0113\u0003\u0002\u0002\u0002\"\u0124\u0003\u0002\u0002\u0002",
    "$\u0129\u0003\u0002\u0002\u0002&\u012b\u0003\u0002\u0002\u0002(\u0135",
    "\u0003\u0002\u0002\u0002*\u0137\u0003\u0002\u0002\u0002,\u014a\u0003",
    "\u0002\u0002\u0002.\u014e\u0003\u0002\u0002\u00020\u0150\u0003\u0002",
    "\u0002\u00022\u0153\u0003\u0002\u0002\u00024\u0156\u0003\u0002\u0002",
    "\u00026\u0159\u0003\u0002\u0002\u00028\u015c\u0003\u0002\u0002\u0002",
    ":\u015f\u0003\u0002\u0002\u0002<\u0162\u0003\u0002\u0002\u0002>\u0165",
    "\u0003\u0002\u0002\u0002@\u0168\u0003\u0002\u0002\u0002B\u016b\u0003",
    "\u0002\u0002\u0002D\u0177\u0003\u0002\u0002\u0002F\u017a\u0003\u0002",
    "\u0002\u0002H\u017d\u0003\u0002\u0002\u0002J\u0186\u0003\u0002\u0002",
    "\u0002L\u0198\u0003\u0002\u0002\u0002N\u01a2\u0003\u0002\u0002\u0002",
    "P\u01ac\u0003\u0002\u0002\u0002R\u01b7\u0003\u0002\u0002\u0002T\u01c2",
    "\u0003\u0002\u0002\u0002V\u01cf\u0003\u0002\u0002\u0002X\u01d7\u0003",
    "\u0002\u0002\u0002Z\u01e3\u0003\u0002\u0002\u0002\\\u01e7\u0003\u0002",
    "\u0002\u0002^\u01ff\u0003\u0002\u0002\u0002`\u0201\u0003\u0002\u0002",
    "\u0002b\u0207\u0003\u0002\u0002\u0002d\u0214\u0003\u0002\u0002\u0002",
    "f\u0217\u0003\u0002\u0002\u0002h\u0228\u0003\u0002\u0002\u0002j\u022d",
    "\u0003\u0002\u0002\u0002l\u0232\u0003\u0002\u0002\u0002n\u0239\u0003",
    "\u0002\u0002\u0002p\u023b\u0003\u0002\u0002\u0002r\u023d\u0003\u0002",
    "\u0002\u0002t\u023f\u0003\u0002\u0002\u0002v\u0241\u0003\u0002\u0002",
    "\u0002x\u0243\u0003\u0002\u0002\u0002z\u0251\u0003\u0002\u0002\u0002",
    "|\u0253\u0003\u0002\u0002\u0002~\u025f\u0003\u0002\u0002\u0002\u0080",
    "\u0263\u0003\u0002\u0002\u0002\u0082\u0268\u0003\u0002\u0002\u0002\u0084",
    "\u026b\u0003\u0002\u0002\u0002\u0086\u026f\u0003\u0002\u0002\u0002\u0088",
    "\u0273\u0003\u0002\u0002\u0002\u008a\u0277\u0003\u0002\u0002\u0002\u008c",
    "\u0279\u0003\u0002\u0002\u0002\u008e\u027d\u0003\u0002\u0002\u0002\u0090",
    "\u0092\u0005\u0004\u0003\u0002\u0091\u0090\u0003\u0002\u0002\u0002\u0092",
    "\u0095\u0003\u0002\u0002\u0002\u0093\u0091\u0003\u0002\u0002\u0002\u0093",
    "\u0094\u0003\u0002\u0002\u0002\u0094\u0096\u0003\u0002\u0002\u0002\u0095",
    "\u0093\u0003\u0002\u0002\u0002\u0096\u0097\u0007\u0002\u0002\u0003\u0097",
    "\u0003\u0003\u0002\u0002\u0002\u0098\u00a2\u0005\u0006\u0004\u0002\u0099",
    "\u00a2\u0005\b\u0005\u0002\u009a\u00a2\u0005\n\u0006\u0002\u009b\u00a2",
    "\u0005\u0016\f\u0002\u009c\u00a2\u0005\u0010\t\u0002\u009d\u00a2\u0005",
    "\u001a\u000e\u0002\u009e\u00a2\u0005 \u0011\u0002\u009f\u00a2\u0005",
    "&\u0014\u0002\u00a0\u00a2\u0005*\u0016\u0002\u00a1\u0098\u0003\u0002",
    "\u0002\u0002\u00a1\u0099\u0003\u0002\u0002\u0002\u00a1\u009a\u0003\u0002",
    "\u0002\u0002\u00a1\u009b\u0003\u0002\u0002\u0002\u00a1\u009c\u0003\u0002",
    "\u0002\u0002\u00a1\u009d\u0003\u0002\u0002\u0002\u00a1\u009e\u0003\u0002",
    "\u0002\u0002\u00a1\u009f\u0003\u0002\u0002\u0002\u00a1\u00a0\u0003\u0002",
    "\u0002\u0002\u00a2\u0005\u0003\u0002\u0002\u0002\u00a3\u00a4\u0007\u0003",
    "\u0002\u0002\u00a4\u00a5\u0007I\u0002\u0002\u00a5\u00a6\u00074\u0002",
    "\u0002\u00a6\u00a7\u0007I\u0002\u0002\u00a7\u0007\u0003\u0002\u0002",
    "\u0002\u00a8\u00a9\u0007\u0004\u0002\u0002\u00a9\u00ab\u0007I\u0002",
    "\u0002\u00aa\u00ac\u0005\f\u0007\u0002\u00ab\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b2\u0003\u0002\u0002",
    "\u0002\u00af\u00b1\u0005\u000e\b\u0002\u00b0\u00af\u0003\u0002\u0002",
    "\u0002\u00b1\u00b4\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002",
    "\u0002\u00b2\u00b3\u0003\u0002\u0002\u0002\u00b3\t\u0003\u0002\u0002",
    "\u0002\u00b4\u00b2\u0003\u0002\u0002\u0002\u00b5\u00b6\u0007\u0005\u0002",
    "\u0002\u00b6\u00ba\u0007I\u0002\u0002\u00b7\u00b9\u0005\f\u0007\u0002",
    "\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9\u00bc\u0003\u0002\u0002\u0002",
    "\u00ba\u00b8\u0003\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002",
    "\u00bb\u00c0\u0003\u0002\u0002\u0002\u00bc\u00ba\u0003\u0002\u0002\u0002",
    "\u00bd\u00bf\u0005\u000e\b\u0002\u00be\u00bd\u0003\u0002\u0002\u0002",
    "\u00bf\u00c2\u0003\u0002\u0002\u0002\u00c0\u00be\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\u000b\u0003\u0002\u0002\u0002",
    "\u00c2\u00c0\u0003\u0002\u0002\u0002\u00c3\u00c9\u00050\u0019\u0002",
    "\u00c4\u00c9\u00052\u001a\u0002\u00c5\u00c9\u00054\u001b\u0002\u00c6",
    "\u00c9\u00056\u001c\u0002\u00c7\u00c9\u0005B\"\u0002\u00c8\u00c3\u0003",
    "\u0002\u0002\u0002\u00c8\u00c4\u0003\u0002\u0002\u0002\u00c8\u00c5\u0003",
    "\u0002\u0002\u0002\u00c8\u00c6\u0003\u0002\u0002\u0002\u00c8\u00c7\u0003",
    "\u0002\u0002\u0002\u00c9\r\u0003\u0002\u0002\u0002\u00ca\u00d4\u0005",
    "H%\u0002\u00cb\u00d4\u0005J&\u0002\u00cc\u00d4\u0005L\'\u0002\u00cd",
    "\u00d4\u0005N(\u0002\u00ce\u00d4\u0005P)\u0002\u00cf\u00d4\u0005R*\u0002",
    "\u00d0\u00d4\u0005T+\u0002\u00d1\u00d4\u0005V,\u0002\u00d2\u00d4\u0005",
    "Z.\u0002\u00d3\u00ca\u0003\u0002\u0002\u0002\u00d3\u00cb\u0003\u0002",
    "\u0002\u0002\u00d3\u00cc\u0003\u0002\u0002\u0002\u00d3\u00cd\u0003\u0002",
    "\u0002\u0002\u00d3\u00ce\u0003\u0002\u0002\u0002\u00d3\u00cf\u0003\u0002",
    "\u0002\u0002\u00d3\u00d0\u0003\u0002\u0002\u0002\u00d3\u00d1\u0003\u0002",
    "\u0002\u0002\u00d3\u00d2\u0003\u0002\u0002\u0002\u00d4\u000f\u0003\u0002",
    "\u0002\u0002\u00d5\u00d6\u0007\u0006\u0002\u0002\u00d6\u00da\u0007I",
    "\u0002\u0002\u00d7\u00d9\u0005\u0012\n\u0002\u00d8\u00d7\u0003\u0002",
    "\u0002\u0002\u00d9\u00dc\u0003\u0002\u0002\u0002\u00da\u00d8\u0003\u0002",
    "\u0002\u0002\u00da\u00db\u0003\u0002\u0002\u0002\u00db\u00e0\u0003\u0002",
    "\u0002\u0002\u00dc\u00da\u0003\u0002\u0002\u0002\u00dd\u00df\u0005\u0014",
    "\u000b\u0002\u00de\u00dd\u0003\u0002\u0002\u0002\u00df\u00e2\u0003\u0002",
    "\u0002\u0002\u00e0\u00de\u0003\u0002\u0002\u0002\u00e0\u00e1\u0003\u0002",
    "\u0002\u0002\u00e1\u0011\u0003\u0002\u0002\u0002\u00e2\u00e0\u0003\u0002",
    "\u0002\u0002\u00e3\u00e9\u0005> \u0002\u00e4\u00e9\u00054\u001b\u0002",
    "\u00e5\u00e9\u00056\u001c\u0002\u00e6\u00e9\u0005@!\u0002\u00e7\u00e9",
    "\u0005B\"\u0002\u00e8\u00e3\u0003\u0002\u0002\u0002\u00e8\u00e4\u0003",
    "\u0002\u0002\u0002\u00e8\u00e5\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003",
    "\u0002\u0002\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e9\u0013\u0003",
    "\u0002\u0002\u0002\u00ea\u00ed\u0005N(\u0002\u00eb\u00ed\u0005Z.\u0002",
    "\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec\u00eb\u0003\u0002\u0002\u0002",
    "\u00ed\u0015\u0003\u0002\u0002\u0002\u00ee\u00ef\u0007\b\u0002\u0002",
    "\u00ef\u00f1\u0007I\u0002\u0002\u00f0\u00f2\u0005\u0018\r\u0002\u00f1",
    "\u00f0\u0003\u0002\u0002\u0002\u00f2\u00f3\u0003\u0002\u0002\u0002\u00f3",
    "\u00f1\u0003\u0002\u0002\u0002\u00f3\u00f4\u0003\u0002\u0002\u0002\u00f4",
    "\u0017\u0003\u0002\u0002\u0002\u00f5\u00fa\u00056\u001c\u0002\u00f6",
    "\u00fa\u00058\u001d\u0002\u00f7\u00fa\u0005:\u001e\u0002\u00f8\u00fa",
    "\u0005<\u001f\u0002\u00f9\u00f5\u0003\u0002\u0002\u0002\u00f9\u00f6",
    "\u0003\u0002\u0002\u0002\u00f9\u00f7\u0003\u0002\u0002\u0002\u00f9\u00f8",
    "\u0003\u0002\u0002\u0002\u00fa\u0019\u0003\u0002\u0002\u0002\u00fb\u00fc",
    "\u0007\t\u0002\u0002\u00fc\u0100\u0007I\u0002\u0002\u00fd\u00ff\u0005",
    "\u001c\u000f\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff\u0102\u0003",
    "\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100\u0101\u0003",
    "\u0002\u0002\u0002\u0101\u0106\u0003\u0002\u0002\u0002\u0102\u0100\u0003",
    "\u0002\u0002\u0002\u0103\u0105\u0005\u001e\u0010\u0002\u0104\u0103\u0003",
    "\u0002\u0002\u0002\u0105\u0108\u0003\u0002\u0002\u0002\u0106\u0104\u0003",
    "\u0002\u0002\u0002\u0106\u0107\u0003\u0002\u0002\u0002\u0107\u001b\u0003",
    "\u0002\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0109\u010d\u0005",
    "2\u001a\u0002\u010a\u010d\u00054\u001b\u0002\u010b\u010d\u00056\u001c",
    "\u0002\u010c\u0109\u0003\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002",
    "\u0002\u010c\u010b\u0003\u0002\u0002\u0002\u010d\u001d\u0003\u0002\u0002",
    "\u0002\u010e\u0112\u0005\\/\u0002\u010f\u0112\u0005V,\u0002\u0110\u0112",
    "\u0005Z.\u0002\u0111\u010e\u0003\u0002\u0002\u0002\u0111\u010f\u0003",
    "\u0002\u0002\u0002\u0111\u0110\u0003\u0002\u0002\u0002\u0112\u001f\u0003",
    "\u0002\u0002\u0002\u0113\u0114\u0007\n\u0002\u0002\u0114\u0118\u0007",
    "I\u0002\u0002\u0115\u0117\u0005\"\u0012\u0002\u0116\u0115\u0003\u0002",
    "\u0002\u0002\u0117\u011a\u0003\u0002\u0002\u0002\u0118\u0116\u0003\u0002",
    "\u0002\u0002\u0118\u0119\u0003\u0002\u0002\u0002\u0119\u011e\u0003\u0002",
    "\u0002\u0002\u011a\u0118\u0003\u0002\u0002\u0002\u011b\u011d\u0005$",
    "\u0013\u0002\u011c\u011b\u0003\u0002\u0002\u0002\u011d\u0120\u0003\u0002",
    "\u0002\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011e\u011f\u0003\u0002",
    "\u0002\u0002\u011f!\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002",
    "\u0002\u0002\u0121\u0125\u00052\u001a\u0002\u0122\u0125\u00054\u001b",
    "\u0002\u0123\u0125\u00056\u001c\u0002\u0124\u0121\u0003\u0002\u0002",
    "\u0002\u0124\u0122\u0003\u0002\u0002\u0002\u0124\u0123\u0003\u0002\u0002",
    "\u0002\u0125#\u0003\u0002\u0002\u0002\u0126\u012a\u0005\u0080A\u0002",
    "\u0127\u012a\u0005V,\u0002\u0128\u012a\u0005Z.\u0002\u0129\u0126\u0003",
    "\u0002\u0002\u0002\u0129\u0127\u0003\u0002\u0002\u0002\u0129\u0128\u0003",
    "\u0002\u0002\u0002\u012a%\u0003\u0002\u0002\u0002\u012b\u012c\u0007",
    "\u000b\u0002\u0002\u012c\u012e\u0007I\u0002\u0002\u012d\u012f\u0005",
    "(\u0015\u0002\u012e\u012d\u0003\u0002\u0002\u0002\u012f\u0130\u0003",
    "\u0002\u0002\u0002\u0130\u012e\u0003\u0002\u0002\u0002\u0130\u0131\u0003",
    "\u0002\u0002\u0002\u0131\'\u0003\u0002\u0002\u0002\u0132\u0136\u0005",
    "\u000e\b\u0002\u0133\u0136\u0005\u0080A\u0002\u0134\u0136\u0005\\/\u0002",
    "\u0135\u0132\u0003\u0002\u0002\u0002\u0135\u0133\u0003\u0002\u0002\u0002",
    "\u0135\u0134\u0003\u0002\u0002\u0002\u0136)\u0003\u0002\u0002\u0002",
    "\u0137\u0138\u0007\f\u0002\u0002\u0138\u013c\u0007I\u0002\u0002\u0139",
    "\u013b\u0005,\u0017\u0002\u013a\u0139\u0003\u0002\u0002\u0002\u013b",
    "\u013e\u0003\u0002\u0002\u0002\u013c\u013a\u0003\u0002\u0002\u0002\u013c",
    "\u013d\u0003\u0002\u0002\u0002\u013d\u0142\u0003\u0002\u0002\u0002\u013e",
    "\u013c\u0003\u0002\u0002\u0002\u013f\u0141\u0005.\u0018\u0002\u0140",
    "\u013f\u0003\u0002\u0002\u0002\u0141\u0144\u0003\u0002\u0002\u0002\u0142",
    "\u0140\u0003\u0002\u0002\u0002\u0142\u0143\u0003\u0002\u0002\u0002\u0143",
    "+\u0003\u0002\u0002\u0002\u0144\u0142\u0003\u0002\u0002\u0002\u0145",
    "\u014b\u00052\u001a\u0002\u0146\u014b\u0005D#\u0002\u0147\u014b\u0005",
    "F$\u0002\u0148\u014b\u00056\u001c\u0002\u0149\u014b\u00054\u001b\u0002",
    "\u014a\u0145\u0003\u0002\u0002\u0002\u014a\u0146\u0003\u0002\u0002\u0002",
    "\u014a\u0147\u0003\u0002\u0002\u0002\u014a\u0148\u0003\u0002\u0002\u0002",
    "\u014a\u0149\u0003\u0002\u0002\u0002\u014b-\u0003\u0002\u0002\u0002",
    "\u014c\u014f\u0005X-\u0002\u014d\u014f\u0005Z.\u0002\u014e\u014c\u0003",
    "\u0002\u0002\u0002\u014e\u014d\u0003\u0002\u0002\u0002\u014f/\u0003",
    "\u0002\u0002\u0002\u0150\u0151\u0007\u000e\u0002\u0002\u0151\u0152\u0007",
    "I\u0002\u0002\u01521\u0003\u0002\u0002\u0002\u0153\u0154\u0007\u000f",
    "\u0002\u0002\u0154\u0155\u0007I\u0002\u0002\u01553\u0003\u0002\u0002",
    "\u0002\u0156\u0157\u0007\u0010\u0002\u0002\u0157\u0158\u00079\u0002",
    "\u0002\u01585\u0003\u0002\u0002\u0002\u0159\u015a\u0007\u0011\u0002",
    "\u0002\u015a\u015b\t\u0002\u0002\u0002\u015b7\u0003\u0002\u0002\u0002",
    "\u015c\u015d\u0007\u0012\u0002\u0002\u015d\u015e\u00079\u0002\u0002",
    "\u015e9\u0003\u0002\u0002\u0002\u015f\u0160\u0007\u0013\u0002\u0002",
    "\u0160\u0161\u00079\u0002\u0002\u0161;\u0003\u0002\u0002\u0002\u0162",
    "\u0163\u0007\u0014\u0002\u0002\u0163\u0164\u0007=\u0002\u0002\u0164",
    "=\u0003\u0002\u0002\u0002\u0165\u0166\u0007\u0007\u0002\u0002\u0166",
    "\u0167\u0007I\u0002\u0002\u0167?\u0003\u0002\u0002\u0002\u0168\u0169",
    "\u0007\u0015\u0002\u0002\u0169\u016a\u0007=\u0002\u0002\u016aA\u0003",
    "\u0002\u0002\u0002\u016b\u0175\u0007\r\u0002\u0002\u016c\u016d\u0007",
    "I\u0002\u0002\u016d\u016f\u0007%\u0002\u0002\u016e\u016c\u0003\u0002",
    "\u0002\u0002\u016f\u0172\u0003\u0002\u0002\u0002\u0170\u016e\u0003\u0002",
    "\u0002\u0002\u0170\u0171\u0003\u0002\u0002\u0002\u0171\u0173\u0003\u0002",
    "\u0002\u0002\u0172\u0170\u0003\u0002\u0002\u0002\u0173\u0176\u0007I",
    "\u0002\u0002\u0174\u0176\u0007H\u0002\u0002\u0175\u0170\u0003\u0002",
    "\u0002\u0002\u0175\u0174\u0003\u0002\u0002\u0002\u0176C\u0003\u0002",
    "\u0002\u0002\u0177\u0178\u0007\u0016\u0002\u0002\u0178\u0179\u0007I",
    "\u0002\u0002\u0179E\u0003\u0002\u0002\u0002\u017a\u017b\u0007\u0017",
    "\u0002\u0002\u017b\u017c\u00079\u0002\u0002\u017cG\u0003\u0002\u0002",
    "\u0002\u017d\u017e\u00075\u0002\u0002\u017e\u017f\u0005p9\u0002\u017f",
    "\u0183\u0007A\u0002\u0002\u0180\u0182\u0005v<\u0002\u0181\u0180\u0003",
    "\u0002\u0002\u0002\u0182\u0185\u0003\u0002\u0002\u0002\u0183\u0181\u0003",
    "\u0002\u0002\u0002\u0183\u0184\u0003\u0002\u0002\u0002\u0184I\u0003",
    "\u0002\u0002\u0002\u0185\u0183\u0003\u0002\u0002\u0002\u0186\u0191\u0007",
    "5\u0002\u0002\u0187\u0188\u0005p9\u0002\u0188\u0189\u0007%\u0002\u0002",
    "\u0189\u018b\u0003\u0002\u0002\u0002\u018a\u0187\u0003\u0002\u0002\u0002",
    "\u018b\u018e\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002\u0002",
    "\u018c\u018d\u0003\u0002\u0002\u0002\u018d\u018f\u0003\u0002\u0002\u0002",
    "\u018e\u018c\u0003\u0002\u0002\u0002\u018f\u0192\u0005p9\u0002\u0190",
    "\u0192\u0005r:\u0002\u0191\u018c\u0003\u0002\u0002\u0002\u0191\u0190",
    "\u0003\u0002\u0002\u0002\u0192\u0194\u0003\u0002\u0002\u0002\u0193\u0195",
    "\u0005v<\u0002\u0194\u0193\u0003\u0002\u0002\u0002\u0195\u0196\u0003",
    "\u0002\u0002\u0002\u0196\u0194\u0003\u0002\u0002\u0002\u0196\u0197\u0003",
    "\u0002\u0002\u0002\u0197K\u0003\u0002\u0002\u0002\u0198\u0199\u0007",
    "5\u0002\u0002\u0199\u019b\u0005p9\u0002\u019a\u019c\u00071\u0002\u0002",
    "\u019b\u019a\u0003\u0002\u0002\u0002\u019b\u019c\u0003\u0002\u0002\u0002",
    "\u019c\u019d\u0003\u0002\u0002\u0002\u019d\u019e\u0007\u001e\u0002\u0002",
    "\u019e\u01a0\u0007I\u0002\u0002\u019f\u01a1\u0005x=\u0002\u01a0\u019f",
    "\u0003\u0002\u0002\u0002\u01a0\u01a1\u0003\u0002\u0002\u0002\u01a1M",
    "\u0003\u0002\u0002\u0002\u01a2\u01a3\u00075\u0002\u0002\u01a3\u01a5",
    "\u0005p9\u0002\u01a4\u01a6\u00071\u0002\u0002\u01a5\u01a4\u0003\u0002",
    "\u0002\u0002\u01a5\u01a6\u0003\u0002\u0002\u0002\u01a6\u01a7\u0003\u0002",
    "\u0002\u0002\u01a7\u01a8\u00074\u0002\u0002\u01a8\u01aa\u0005z>\u0002",
    "\u01a9\u01ab\u00072\u0002\u0002\u01aa\u01a9\u0003\u0002\u0002\u0002",
    "\u01aa\u01ab\u0003\u0002\u0002\u0002\u01abO\u0003\u0002\u0002\u0002",
    "\u01ac\u01ad\u00075\u0002\u0002\u01ad\u01ae\u0005p9\u0002\u01ae\u01af",
    "\u0007#\u0002\u0002\u01af\u01b4\u0005|?\u0002\u01b0\u01b1\u0007%\u0002",
    "\u0002\u01b1\u01b3\u0005|?\u0002\u01b2\u01b0\u0003\u0002\u0002\u0002",
    "\u01b3\u01b6\u0003\u0002\u0002\u0002\u01b4\u01b2\u0003\u0002\u0002\u0002",
    "\u01b4\u01b5\u0003\u0002\u0002\u0002\u01b5Q\u0003\u0002\u0002\u0002",
    "\u01b6\u01b4\u0003\u0002\u0002\u0002\u01b7\u01b8\u00075\u0002\u0002",
    "\u01b8\u01b9\u0005p9\u0002\u01b9\u01ba\u0007&\u0002\u0002\u01ba\u01bf",
    "\u0005\u008eH\u0002\u01bb\u01bc\u0007\'\u0002\u0002\u01bc\u01be\u0005",
    "\u008eH\u0002\u01bd\u01bb\u0003\u0002\u0002\u0002\u01be\u01c1\u0003",
    "\u0002\u0002\u0002\u01bf\u01bd\u0003\u0002\u0002\u0002\u01bf\u01c0\u0003",
    "\u0002\u0002\u0002\u01c0S\u0003\u0002\u0002\u0002\u01c1\u01bf\u0003",
    "\u0002\u0002\u0002\u01c2\u01c4\u00075\u0002\u0002\u01c3\u01c5\u0005",
    "p9\u0002\u01c4\u01c3\u0003\u0002\u0002\u0002\u01c4\u01c5\u0003\u0002",
    "\u0002\u0002\u01c5\u01c6\u0003\u0002\u0002\u0002\u01c6\u01c7\u0007(",
    "\u0002\u0002\u01c7\u01cc\u0007I\u0002\u0002\u01c8\u01c9\u0007%\u0002",
    "\u0002\u01c9\u01cb\u0007I\u0002\u0002\u01ca\u01c8\u0003\u0002\u0002",
    "\u0002\u01cb\u01ce\u0003\u0002\u0002\u0002\u01cc\u01ca\u0003\u0002\u0002",
    "\u0002\u01cc\u01cd\u0003\u0002\u0002\u0002\u01cdU\u0003\u0002\u0002",
    "\u0002\u01ce\u01cc\u0003\u0002\u0002\u0002\u01cf\u01d1\u00075\u0002",
    "\u0002\u01d0\u01d2\u0005p9\u0002\u01d1\u01d0\u0003\u0002\u0002\u0002",
    "\u01d1\u01d2\u0003\u0002\u0002\u0002\u01d2\u01d3\u0003\u0002\u0002\u0002",
    "\u01d3\u01d4\u0005t;\u0002\u01d4\u01d5\u00074\u0002\u0002\u01d5\u01d6",
    "\u0005z>\u0002\u01d6W\u0003\u0002\u0002\u0002\u01d7\u01d9\u00075\u0002",
    "\u0002\u01d8\u01da\u0005p9\u0002\u01d9\u01d8\u0003\u0002\u0002\u0002",
    "\u01d9\u01da\u0003\u0002\u0002\u0002\u01da\u01db\u0003\u0002\u0002\u0002",
    "\u01db\u01dc\u00078\u0002\u0002\u01dc\u01de\u00079\u0002\u0002\u01dd",
    "\u01df\u00079\u0002\u0002\u01de\u01dd\u0003\u0002\u0002\u0002\u01de",
    "\u01df\u0003\u0002\u0002\u0002\u01df\u01e1\u0003\u0002\u0002\u0002\u01e0",
    "\u01e2\u0007=\u0002\u0002\u01e1\u01e0\u0003\u0002\u0002\u0002\u01e1",
    "\u01e2\u0003\u0002\u0002\u0002\u01e2Y\u0003\u0002\u0002\u0002\u01e3",
    "\u01e4\u00075\u0002\u0002\u01e4\u01e5\u00073\u0002\u0002\u01e5\u01e6",
    "\u0007I\u0002\u0002\u01e6[\u0003\u0002\u0002\u0002\u01e7\u01e9\u0007",
    "5\u0002\u0002\u01e8\u01ea\t\u0003\u0002\u0002\u01e9\u01e8\u0003\u0002",
    "\u0002\u0002\u01e9\u01ea\u0003\u0002\u0002\u0002\u01ea\u01ed\u0003\u0002",
    "\u0002\u0002\u01eb\u01ee\u0005^0\u0002\u01ec\u01ee\u0005`1\u0002\u01ed",
    "\u01eb\u0003\u0002\u0002\u0002\u01ed\u01ec\u0003\u0002\u0002\u0002\u01ee",
    "]\u0003\u0002\u0002\u0002\u01ef\u01f1\u0005~@\u0002\u01f0\u01f2\u0005",
    "b2\u0002\u01f1\u01f0\u0003\u0002\u0002\u0002\u01f1\u01f2\u0003\u0002",
    "\u0002\u0002\u01f2\u0200\u0003\u0002\u0002\u0002\u01f3\u01f4\u0005~",
    "@\u0002\u01f4\u01f5\u0007%\u0002\u0002\u01f5\u01f7\u0003\u0002\u0002",
    "\u0002\u01f6\u01f3\u0003\u0002\u0002\u0002\u01f7\u01f8\u0003\u0002\u0002",
    "\u0002\u01f8\u01f6\u0003\u0002\u0002\u0002\u01f8\u01f9\u0003\u0002\u0002",
    "\u0002\u01f9\u01fa\u0003\u0002\u0002\u0002\u01fa\u01fb\u0005~@\u0002",
    "\u01fb\u01fc\u0005b2\u0002\u01fc\u0200\u0003\u0002\u0002\u0002\u01fd",
    "\u01fe\u0007G\u0002\u0002\u01fe\u0200\u0005b2\u0002\u01ff\u01ef\u0003",
    "\u0002\u0002\u0002\u01ff\u01f6\u0003\u0002\u0002\u0002\u01ff\u01fd\u0003",
    "\u0002\u0002\u0002\u0200_\u0003\u0002\u0002\u0002\u0201\u0202\u0007",
    "-\u0002\u0002\u0202\u0205\u0005b2\u0002\u0203\u0204\u0007.\u0002\u0002",
    "\u0204\u0206\u0005h5\u0002\u0205\u0203\u0003\u0002\u0002\u0002\u0205",
    "\u0206\u0003\u0002\u0002\u0002\u0206a\u0003\u0002\u0002\u0002\u0207",
    "\u0212\u0007\u001e\u0002\u0002\u0208\u020b\u0005d3\u0002\u0209\u020a",
    "\u0007%\u0002\u0002\u020a\u020c\u0005f4\u0002\u020b\u0209\u0003\u0002",
    "\u0002\u0002\u020b\u020c\u0003\u0002\u0002\u0002\u020c\u0213\u0003\u0002",
    "\u0002\u0002\u020d\u0210\u0005f4\u0002\u020e\u020f\u0007%\u0002\u0002",
    "\u020f\u0211\u0005d3\u0002\u0210\u020e\u0003\u0002\u0002\u0002\u0210",
    "\u0211\u0003\u0002\u0002\u0002\u0211\u0213\u0003\u0002\u0002\u0002\u0212",
    "\u0208\u0003\u0002\u0002\u0002\u0212\u020d\u0003\u0002\u0002\u0002\u0213",
    "c\u0003\u0002\u0002\u0002\u0214\u0215\u00070\u0002\u0002\u0215\u0216",
    "\u0007I\u0002\u0002\u0216e\u0003\u0002\u0002\u0002\u0217\u0221\u0007",
    "/\u0002\u0002\u0218\u0219\u0007I\u0002\u0002\u0219\u021b\u0007%\u0002",
    "\u0002\u021a\u0218\u0003\u0002\u0002\u0002\u021b\u021e\u0003\u0002\u0002",
    "\u0002\u021c\u021a\u0003\u0002\u0002\u0002\u021c\u021d\u0003\u0002\u0002",
    "\u0002\u021d\u021f\u0003\u0002\u0002\u0002\u021e\u021c\u0003\u0002\u0002",
    "\u0002\u021f\u0222\u0007I\u0002\u0002\u0220\u0222\u0007H\u0002\u0002",
    "\u0221\u021c\u0003\u0002\u0002\u0002\u0221\u0220\u0003\u0002\u0002\u0002",
    "\u0222g\u0003\u0002\u0002\u0002\u0223\u0224\u0005j6\u0002\u0224\u0225",
    "\u0007%\u0002\u0002\u0225\u0227\u0003\u0002\u0002\u0002\u0226\u0223",
    "\u0003\u0002\u0002\u0002\u0227\u022a\u0003\u0002\u0002\u0002\u0228\u0226",
    "\u0003\u0002\u0002\u0002\u0228\u0229\u0003\u0002\u0002\u0002\u0229\u022b",
    "\u0003\u0002\u0002\u0002\u022a\u0228\u0003\u0002\u0002\u0002\u022b\u022c",
    "\u0005j6\u0002\u022ci\u0003\u0002\u0002\u0002\u022d\u022e\u0007I\u0002",
    "\u0002\u022e\u0230\u0005l7\u0002\u022f\u0231\u0005n8\u0002\u0230\u022f",
    "\u0003\u0002\u0002\u0002\u0230\u0231\u0003\u0002\u0002\u0002\u0231k",
    "\u0003\u0002\u0002\u0002\u0232\u0233\t\u0004\u0002\u0002\u0233m\u0003",
    "\u0002\u0002\u0002\u0234\u023a\u0005~@\u0002\u0235\u023a\u0007)\u0002",
    "\u0002\u0236\u023a\u0007*\u0002\u0002\u0237\u023a\u0007F\u0002\u0002",
    "\u0238\u023a\u00079\u0002\u0002\u0239\u0234\u0003\u0002\u0002\u0002",
    "\u0239\u0235\u0003\u0002\u0002\u0002\u0239\u0236\u0003\u0002\u0002\u0002",
    "\u0239\u0237\u0003\u0002\u0002\u0002\u0239\u0238\u0003\u0002\u0002\u0002",
    "\u023ao\u0003\u0002\u0002\u0002\u023b\u023c\t\u0005\u0002\u0002\u023c",
    "q\u0003\u0002\u0002\u0002\u023d\u023e\u0007H\u0002\u0002\u023es\u0003",
    "\u0002\u0002\u0002\u023f\u0240\u0007E\u0002\u0002\u0240u\u0003\u0002",
    "\u0002\u0002\u0241\u0242\t\u0006\u0002\u0002\u0242w\u0003\u0002\u0002",
    "\u0002\u0243\u0244\t\u0007\u0002\u0002\u0244y\u0003\u0002\u0002\u0002",
    "\u0245\u0252\u0007I\u0002\u0002\u0246\u0252\u00079\u0002\u0002\u0247",
    "\u0252\u0007:\u0002\u0002\u0248\u0252\u0007;\u0002\u0002\u0249\u0252",
    "\u0007?\u0002\u0002\u024a\u0252\u0007@\u0002\u0002\u024b\u0252\u0005",
    "\u0086D\u0002\u024c\u0252\u0005\u0088E\u0002\u024d\u0252\u0005~@\u0002",
    "\u024e\u0252\u0005\u0082B\u0002\u024f\u0252\u0005\u0084C\u0002\u0250",
    "\u0252\u0005\u008cG\u0002\u0251\u0245\u0003\u0002\u0002\u0002\u0251",
    "\u0246\u0003\u0002\u0002\u0002\u0251\u0247\u0003\u0002\u0002\u0002\u0251",
    "\u0248\u0003\u0002\u0002\u0002\u0251\u0249\u0003\u0002\u0002\u0002\u0251",
    "\u024a\u0003\u0002\u0002\u0002\u0251\u024b\u0003\u0002\u0002\u0002\u0251",
    "\u024c\u0003\u0002\u0002\u0002\u0251\u024d\u0003\u0002\u0002\u0002\u0251",
    "\u024e\u0003\u0002\u0002\u0002\u0251\u024f\u0003\u0002\u0002\u0002\u0251",
    "\u0250\u0003\u0002\u0002\u0002\u0252{\u0003\u0002\u0002\u0002\u0253",
    "\u0256\u0007I\u0002\u0002\u0254\u0255\u0007$\u0002\u0002\u0255\u0257",
    "\u0007I\u0002\u0002\u0256\u0254\u0003\u0002\u0002\u0002\u0256\u0257",
    "\u0003\u0002\u0002\u0002\u0257\u0258\u0003\u0002\u0002\u0002\u0258\u025c",
    "\u0007A\u0002\u0002\u0259\u025b\u0005v<\u0002\u025a\u0259\u0003\u0002",
    "\u0002\u0002\u025b\u025e\u0003\u0002\u0002\u0002\u025c\u025a\u0003\u0002",
    "\u0002\u0002\u025c\u025d\u0003\u0002\u0002\u0002\u025d}\u0003\u0002",
    "\u0002\u0002\u025e\u025c\u0003\u0002\u0002\u0002\u025f\u0261\u0007=",
    "\u0002\u0002\u0260\u0262\u00079\u0002\u0002\u0261\u0260\u0003\u0002",
    "\u0002\u0002\u0261\u0262\u0003\u0002\u0002\u0002\u0262\u007f\u0003\u0002",
    "\u0002\u0002\u0263\u0264\u00075\u0002\u0002\u0264\u0266\u0005~@\u0002",
    "\u0265\u0267\t\u0002\u0002\u0002\u0266\u0265\u0003\u0002\u0002\u0002",
    "\u0266\u0267\u0003\u0002\u0002\u0002\u0267\u0081\u0003\u0002\u0002\u0002",
    "\u0268\u0269\u0007;\u0002\u0002\u0269\u026a\u0007<\u0002\u0002\u026a",
    "\u0083\u0003\u0002\u0002\u0002\u026b\u026c\u0005\u008aF\u0002\u026c",
    "\u026d\u00076\u0002\u0002\u026d\u026e\u0005\u008aF\u0002\u026e\u0085",
    "\u0003\u0002\u0002\u0002\u026f\u0271\t\b\u0002\u0002\u0270\u0272\u0007",
    "9\u0002\u0002\u0271\u0270\u0003\u0002\u0002\u0002\u0271\u0272\u0003",
    "\u0002\u0002\u0002\u0272\u0087\u0003\u0002\u0002\u0002\u0273\u0274\u0007",
    "D\u0002\u0002\u0274\u0089\u0003\u0002\u0002\u0002\u0275\u0278\u0007",
    ";\u0002\u0002\u0276\u0278\u0005\u0082B\u0002\u0277\u0275\u0003\u0002",
    "\u0002\u0002\u0277\u0276\u0003\u0002\u0002\u0002\u0278\u008b\u0003\u0002",
    "\u0002\u0002\u0279\u027a\t\t\u0002\u0002\u027a\u008d\u0003\u0002\u0002",
    "\u0002\u027b\u027e\u0007I\u0002\u0002\u027c\u027e\u0005\u0086D\u0002",
    "\u027d\u027b\u0003\u0002\u0002\u0002\u027d\u027c\u0003\u0002\u0002\u0002",
    "\u027e\u008f\u0003\u0002\u0002\u0002F\u0093\u00a1\u00ad\u00b2\u00ba",
    "\u00c0\u00c8\u00d3\u00da\u00e0\u00e8\u00ec\u00f3\u00f9\u0100\u0106\u010c",
    "\u0111\u0118\u011e\u0124\u0129\u0130\u0135\u013c\u0142\u014a\u014e\u0170",
    "\u0175\u0183\u018c\u0191\u0196\u019b\u01a0\u01a5\u01aa\u01b4\u01bf\u01c4",
    "\u01cc\u01d1\u01d9\u01de\u01e1\u01e9\u01ed\u01f1\u01f8\u01ff\u0205\u020b",
    "\u0210\u0212\u021c\u0221\u0228\u0230\u0239\u0251\u0256\u025c\u0261\u0266",
    "\u0271\u0277\u027d"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, null, null, null, null, null, 
                     null, null, null, null, "'?!'", "'MS'", "'SU'", "'TU'", 
                     "'N'", "'D'", "'from'", null, null, null, null, "'contains'", 
                     "'named'", "'and'", "'only'", "'or'", "'obeys'", "'true'", 
                     "'false'", "'include'", "'exclude'", "'codes'", "'where'", 
                     "'valueset'", "'system'", "'units'", null, "'insert'", 
                     "'='", null, "':'", "','", "'->'" ];

var symbolicNames = [ null, "KW_ALIAS", "KW_PROFILE", "KW_EXTENSION", "KW_INSTANCE", 
                      "KW_INSTANCEOF", "KW_INVARIANT", "KW_VALUESET", "KW_CODESYSTEM", 
                      "KW_RULESET", "KW_MAPPING", "KW_MIXINS", "KW_PARENT", 
                      "KW_ID", "KW_TITLE", "KW_DESCRIPTION", "KW_EXPRESSION", 
                      "KW_XPATH", "KW_SEVERITY", "KW_USAGE", "KW_SOURCE", 
                      "KW_TARGET", "KW_MOD", "KW_MS", "KW_SU", "KW_TU", 
                      "KW_NORMATIVE", "KW_DRAFT", "KW_FROM", "KW_EXAMPLE", 
                      "KW_PREFERRED", "KW_EXTENSIBLE", "KW_REQUIRED", "KW_CONTAINS", 
                      "KW_NAMED", "KW_AND", "KW_ONLY", "KW_OR", "KW_OBEYS", 
                      "KW_TRUE", "KW_FALSE", "KW_INCLUDE", "KW_EXCLUDE", 
                      "KW_CODES", "KW_WHERE", "KW_VSREFERENCE", "KW_SYSTEM", 
                      "KW_UNITS", "KW_EXACTLY", "KW_INSERT", "EQUAL", "STAR", 
                      "COLON", "COMMA", "ARROW", "STRING", "MULTILINE_STRING", 
                      "NUMBER", "UNIT", "CODE", "CONCEPT_STRING", "DATETIME", 
                      "TIME", "CARD", "OR_REFERENCE", "PIPE_REFERENCE", 
                      "CANONICAL", "CARET_SEQUENCE", "REGEX", "COMMA_DELIMITED_CODES", 
                      "COMMA_DELIMITED_SEQUENCES", "SEQUENCE", "WHITESPACE", 
                      "BLOCK_COMMENT", "LINE_COMMENT" ];

var ruleNames =  [ "doc", "entity", "alias", "profile", "extension", "sdMetadata", 
                   "sdRule", "instance", "instanceMetadata", "instanceRule", 
                   "invariant", "invariantMetadata", "valueSet", "vsMetadata", 
                   "vsRule", "codeSystem", "csMetadata", "csRule", "ruleSet", 
                   "ruleSetRule", "mapping", "mappingMetadata", "mappingEntityRule", 
                   "parent", "id", "title", "description", "expression", 
                   "xpath", "severity", "instanceOf", "usage", "mixins", 
                   "source", "target", "cardRule", "flagRule", "valueSetRule", 
                   "fixedValueRule", "containsRule", "onlyRule", "obeysRule", 
                   "caretValueRule", "mappingRule", "insertRule", "vsComponent", 
                   "vsConceptComponent", "vsFilterComponent", "vsComponentFrom", 
                   "vsFromSystem", "vsFromValueset", "vsFilterList", "vsFilterDefinition", 
                   "vsFilterOperator", "vsFilterValue", "path", "paths", 
                   "caretPath", "flag", "strength", "value", "item", "code", 
                   "concept", "quantity", "ratio", "reference", "canonical", 
                   "ratioPart", "bool", "targetType" ];

function FSHParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

FSHParser.prototype = Object.create(antlr4.Parser.prototype);
FSHParser.prototype.constructor = FSHParser;

Object.defineProperty(FSHParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

FSHParser.EOF = antlr4.Token.EOF;
FSHParser.KW_ALIAS = 1;
FSHParser.KW_PROFILE = 2;
FSHParser.KW_EXTENSION = 3;
FSHParser.KW_INSTANCE = 4;
FSHParser.KW_INSTANCEOF = 5;
FSHParser.KW_INVARIANT = 6;
FSHParser.KW_VALUESET = 7;
FSHParser.KW_CODESYSTEM = 8;
FSHParser.KW_RULESET = 9;
FSHParser.KW_MAPPING = 10;
FSHParser.KW_MIXINS = 11;
FSHParser.KW_PARENT = 12;
FSHParser.KW_ID = 13;
FSHParser.KW_TITLE = 14;
FSHParser.KW_DESCRIPTION = 15;
FSHParser.KW_EXPRESSION = 16;
FSHParser.KW_XPATH = 17;
FSHParser.KW_SEVERITY = 18;
FSHParser.KW_USAGE = 19;
FSHParser.KW_SOURCE = 20;
FSHParser.KW_TARGET = 21;
FSHParser.KW_MOD = 22;
FSHParser.KW_MS = 23;
FSHParser.KW_SU = 24;
FSHParser.KW_TU = 25;
FSHParser.KW_NORMATIVE = 26;
FSHParser.KW_DRAFT = 27;
FSHParser.KW_FROM = 28;
FSHParser.KW_EXAMPLE = 29;
FSHParser.KW_PREFERRED = 30;
FSHParser.KW_EXTENSIBLE = 31;
FSHParser.KW_REQUIRED = 32;
FSHParser.KW_CONTAINS = 33;
FSHParser.KW_NAMED = 34;
FSHParser.KW_AND = 35;
FSHParser.KW_ONLY = 36;
FSHParser.KW_OR = 37;
FSHParser.KW_OBEYS = 38;
FSHParser.KW_TRUE = 39;
FSHParser.KW_FALSE = 40;
FSHParser.KW_INCLUDE = 41;
FSHParser.KW_EXCLUDE = 42;
FSHParser.KW_CODES = 43;
FSHParser.KW_WHERE = 44;
FSHParser.KW_VSREFERENCE = 45;
FSHParser.KW_SYSTEM = 46;
FSHParser.KW_UNITS = 47;
FSHParser.KW_EXACTLY = 48;
FSHParser.KW_INSERT = 49;
FSHParser.EQUAL = 50;
FSHParser.STAR = 51;
FSHParser.COLON = 52;
FSHParser.COMMA = 53;
FSHParser.ARROW = 54;
FSHParser.STRING = 55;
FSHParser.MULTILINE_STRING = 56;
FSHParser.NUMBER = 57;
FSHParser.UNIT = 58;
FSHParser.CODE = 59;
FSHParser.CONCEPT_STRING = 60;
FSHParser.DATETIME = 61;
FSHParser.TIME = 62;
FSHParser.CARD = 63;
FSHParser.OR_REFERENCE = 64;
FSHParser.PIPE_REFERENCE = 65;
FSHParser.CANONICAL = 66;
FSHParser.CARET_SEQUENCE = 67;
FSHParser.REGEX = 68;
FSHParser.COMMA_DELIMITED_CODES = 69;
FSHParser.COMMA_DELIMITED_SEQUENCES = 70;
FSHParser.SEQUENCE = 71;
FSHParser.WHITESPACE = 72;
FSHParser.BLOCK_COMMENT = 73;
FSHParser.LINE_COMMENT = 74;

FSHParser.RULE_doc = 0;
FSHParser.RULE_entity = 1;
FSHParser.RULE_alias = 2;
FSHParser.RULE_profile = 3;
FSHParser.RULE_extension = 4;
FSHParser.RULE_sdMetadata = 5;
FSHParser.RULE_sdRule = 6;
FSHParser.RULE_instance = 7;
FSHParser.RULE_instanceMetadata = 8;
FSHParser.RULE_instanceRule = 9;
FSHParser.RULE_invariant = 10;
FSHParser.RULE_invariantMetadata = 11;
FSHParser.RULE_valueSet = 12;
FSHParser.RULE_vsMetadata = 13;
FSHParser.RULE_vsRule = 14;
FSHParser.RULE_codeSystem = 15;
FSHParser.RULE_csMetadata = 16;
FSHParser.RULE_csRule = 17;
FSHParser.RULE_ruleSet = 18;
FSHParser.RULE_ruleSetRule = 19;
FSHParser.RULE_mapping = 20;
FSHParser.RULE_mappingMetadata = 21;
FSHParser.RULE_mappingEntityRule = 22;
FSHParser.RULE_parent = 23;
FSHParser.RULE_id = 24;
FSHParser.RULE_title = 25;
FSHParser.RULE_description = 26;
FSHParser.RULE_expression = 27;
FSHParser.RULE_xpath = 28;
FSHParser.RULE_severity = 29;
FSHParser.RULE_instanceOf = 30;
FSHParser.RULE_usage = 31;
FSHParser.RULE_mixins = 32;
FSHParser.RULE_source = 33;
FSHParser.RULE_target = 34;
FSHParser.RULE_cardRule = 35;
FSHParser.RULE_flagRule = 36;
FSHParser.RULE_valueSetRule = 37;
FSHParser.RULE_fixedValueRule = 38;
FSHParser.RULE_containsRule = 39;
FSHParser.RULE_onlyRule = 40;
FSHParser.RULE_obeysRule = 41;
FSHParser.RULE_caretValueRule = 42;
FSHParser.RULE_mappingRule = 43;
FSHParser.RULE_insertRule = 44;
FSHParser.RULE_vsComponent = 45;
FSHParser.RULE_vsConceptComponent = 46;
FSHParser.RULE_vsFilterComponent = 47;
FSHParser.RULE_vsComponentFrom = 48;
FSHParser.RULE_vsFromSystem = 49;
FSHParser.RULE_vsFromValueset = 50;
FSHParser.RULE_vsFilterList = 51;
FSHParser.RULE_vsFilterDefinition = 52;
FSHParser.RULE_vsFilterOperator = 53;
FSHParser.RULE_vsFilterValue = 54;
FSHParser.RULE_path = 55;
FSHParser.RULE_paths = 56;
FSHParser.RULE_caretPath = 57;
FSHParser.RULE_flag = 58;
FSHParser.RULE_strength = 59;
FSHParser.RULE_value = 60;
FSHParser.RULE_item = 61;
FSHParser.RULE_code = 62;
FSHParser.RULE_concept = 63;
FSHParser.RULE_quantity = 64;
FSHParser.RULE_ratio = 65;
FSHParser.RULE_reference = 66;
FSHParser.RULE_canonical = 67;
FSHParser.RULE_ratioPart = 68;
FSHParser.RULE_bool = 69;
FSHParser.RULE_targetType = 70;


function DocContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_doc;
    return this;
}

DocContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DocContext.prototype.constructor = DocContext;

DocContext.prototype.EOF = function() {
    return this.getToken(FSHParser.EOF, 0);
};

DocContext.prototype.entity = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(EntityContext);
    } else {
        return this.getTypedRuleContext(EntityContext,i);
    }
};

DocContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterDoc(this);
	}
};

DocContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitDoc(this);
	}
};

DocContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitDoc(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.DocContext = DocContext;

FSHParser.prototype.doc = function() {

    var localctx = new DocContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, FSHParser.RULE_doc);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 145;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_ALIAS) | (1 << FSHParser.KW_PROFILE) | (1 << FSHParser.KW_EXTENSION) | (1 << FSHParser.KW_INSTANCE) | (1 << FSHParser.KW_INVARIANT) | (1 << FSHParser.KW_VALUESET) | (1 << FSHParser.KW_CODESYSTEM) | (1 << FSHParser.KW_RULESET) | (1 << FSHParser.KW_MAPPING))) !== 0)) {
            this.state = 142;
            this.entity();
            this.state = 147;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 148;
        this.match(FSHParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function EntityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_entity;
    return this;
}

EntityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EntityContext.prototype.constructor = EntityContext;

EntityContext.prototype.alias = function() {
    return this.getTypedRuleContext(AliasContext,0);
};

EntityContext.prototype.profile = function() {
    return this.getTypedRuleContext(ProfileContext,0);
};

EntityContext.prototype.extension = function() {
    return this.getTypedRuleContext(ExtensionContext,0);
};

EntityContext.prototype.invariant = function() {
    return this.getTypedRuleContext(InvariantContext,0);
};

EntityContext.prototype.instance = function() {
    return this.getTypedRuleContext(InstanceContext,0);
};

EntityContext.prototype.valueSet = function() {
    return this.getTypedRuleContext(ValueSetContext,0);
};

EntityContext.prototype.codeSystem = function() {
    return this.getTypedRuleContext(CodeSystemContext,0);
};

EntityContext.prototype.ruleSet = function() {
    return this.getTypedRuleContext(RuleSetContext,0);
};

EntityContext.prototype.mapping = function() {
    return this.getTypedRuleContext(MappingContext,0);
};

EntityContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterEntity(this);
	}
};

EntityContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitEntity(this);
	}
};

EntityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitEntity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.EntityContext = EntityContext;

FSHParser.prototype.entity = function() {

    var localctx = new EntityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, FSHParser.RULE_entity);
    try {
        this.state = 159;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_ALIAS:
            this.enterOuterAlt(localctx, 1);
            this.state = 150;
            this.alias();
            break;
        case FSHParser.KW_PROFILE:
            this.enterOuterAlt(localctx, 2);
            this.state = 151;
            this.profile();
            break;
        case FSHParser.KW_EXTENSION:
            this.enterOuterAlt(localctx, 3);
            this.state = 152;
            this.extension();
            break;
        case FSHParser.KW_INVARIANT:
            this.enterOuterAlt(localctx, 4);
            this.state = 153;
            this.invariant();
            break;
        case FSHParser.KW_INSTANCE:
            this.enterOuterAlt(localctx, 5);
            this.state = 154;
            this.instance();
            break;
        case FSHParser.KW_VALUESET:
            this.enterOuterAlt(localctx, 6);
            this.state = 155;
            this.valueSet();
            break;
        case FSHParser.KW_CODESYSTEM:
            this.enterOuterAlt(localctx, 7);
            this.state = 156;
            this.codeSystem();
            break;
        case FSHParser.KW_RULESET:
            this.enterOuterAlt(localctx, 8);
            this.state = 157;
            this.ruleSet();
            break;
        case FSHParser.KW_MAPPING:
            this.enterOuterAlt(localctx, 9);
            this.state = 158;
            this.mapping();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function AliasContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_alias;
    return this;
}

AliasContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AliasContext.prototype.constructor = AliasContext;

AliasContext.prototype.KW_ALIAS = function() {
    return this.getToken(FSHParser.KW_ALIAS, 0);
};

AliasContext.prototype.SEQUENCE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.SEQUENCE);
    } else {
        return this.getToken(FSHParser.SEQUENCE, i);
    }
};


AliasContext.prototype.EQUAL = function() {
    return this.getToken(FSHParser.EQUAL, 0);
};

AliasContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterAlias(this);
	}
};

AliasContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitAlias(this);
	}
};

AliasContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitAlias(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.AliasContext = AliasContext;

FSHParser.prototype.alias = function() {

    var localctx = new AliasContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, FSHParser.RULE_alias);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 161;
        this.match(FSHParser.KW_ALIAS);
        this.state = 162;
        this.match(FSHParser.SEQUENCE);
        this.state = 163;
        this.match(FSHParser.EQUAL);
        this.state = 164;
        this.match(FSHParser.SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ProfileContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_profile;
    return this;
}

ProfileContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProfileContext.prototype.constructor = ProfileContext;

ProfileContext.prototype.KW_PROFILE = function() {
    return this.getToken(FSHParser.KW_PROFILE, 0);
};

ProfileContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

ProfileContext.prototype.sdMetadata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SdMetadataContext);
    } else {
        return this.getTypedRuleContext(SdMetadataContext,i);
    }
};

ProfileContext.prototype.sdRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SdRuleContext);
    } else {
        return this.getTypedRuleContext(SdRuleContext,i);
    }
};

ProfileContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterProfile(this);
	}
};

ProfileContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitProfile(this);
	}
};

ProfileContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitProfile(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ProfileContext = ProfileContext;

FSHParser.prototype.profile = function() {

    var localctx = new ProfileContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, FSHParser.RULE_profile);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 166;
        this.match(FSHParser.KW_PROFILE);
        this.state = 167;
        this.match(FSHParser.SEQUENCE);
        this.state = 169; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 168;
            this.sdMetadata();
            this.state = 171; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_MIXINS) | (1 << FSHParser.KW_PARENT) | (1 << FSHParser.KW_ID) | (1 << FSHParser.KW_TITLE) | (1 << FSHParser.KW_DESCRIPTION))) !== 0));
        this.state = 176;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.STAR) {
            this.state = 173;
            this.sdRule();
            this.state = 178;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExtensionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_extension;
    return this;
}

ExtensionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExtensionContext.prototype.constructor = ExtensionContext;

ExtensionContext.prototype.KW_EXTENSION = function() {
    return this.getToken(FSHParser.KW_EXTENSION, 0);
};

ExtensionContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

ExtensionContext.prototype.sdMetadata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SdMetadataContext);
    } else {
        return this.getTypedRuleContext(SdMetadataContext,i);
    }
};

ExtensionContext.prototype.sdRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SdRuleContext);
    } else {
        return this.getTypedRuleContext(SdRuleContext,i);
    }
};

ExtensionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterExtension(this);
	}
};

ExtensionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitExtension(this);
	}
};

ExtensionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitExtension(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ExtensionContext = ExtensionContext;

FSHParser.prototype.extension = function() {

    var localctx = new ExtensionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, FSHParser.RULE_extension);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(FSHParser.KW_EXTENSION);
        this.state = 180;
        this.match(FSHParser.SEQUENCE);
        this.state = 184;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_MIXINS) | (1 << FSHParser.KW_PARENT) | (1 << FSHParser.KW_ID) | (1 << FSHParser.KW_TITLE) | (1 << FSHParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 181;
            this.sdMetadata();
            this.state = 186;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 190;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.STAR) {
            this.state = 187;
            this.sdRule();
            this.state = 192;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SdMetadataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_sdMetadata;
    return this;
}

SdMetadataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SdMetadataContext.prototype.constructor = SdMetadataContext;

SdMetadataContext.prototype.parent = function() {
    return this.getTypedRuleContext(ParentContext,0);
};

SdMetadataContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

SdMetadataContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

SdMetadataContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

SdMetadataContext.prototype.mixins = function() {
    return this.getTypedRuleContext(MixinsContext,0);
};

SdMetadataContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterSdMetadata(this);
	}
};

SdMetadataContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitSdMetadata(this);
	}
};

SdMetadataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitSdMetadata(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.SdMetadataContext = SdMetadataContext;

FSHParser.prototype.sdMetadata = function() {

    var localctx = new SdMetadataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, FSHParser.RULE_sdMetadata);
    try {
        this.state = 198;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_PARENT:
            this.enterOuterAlt(localctx, 1);
            this.state = 193;
            this.parent();
            break;
        case FSHParser.KW_ID:
            this.enterOuterAlt(localctx, 2);
            this.state = 194;
            this.id();
            break;
        case FSHParser.KW_TITLE:
            this.enterOuterAlt(localctx, 3);
            this.state = 195;
            this.title();
            break;
        case FSHParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 4);
            this.state = 196;
            this.description();
            break;
        case FSHParser.KW_MIXINS:
            this.enterOuterAlt(localctx, 5);
            this.state = 197;
            this.mixins();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SdRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_sdRule;
    return this;
}

SdRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SdRuleContext.prototype.constructor = SdRuleContext;

SdRuleContext.prototype.cardRule = function() {
    return this.getTypedRuleContext(CardRuleContext,0);
};

SdRuleContext.prototype.flagRule = function() {
    return this.getTypedRuleContext(FlagRuleContext,0);
};

SdRuleContext.prototype.valueSetRule = function() {
    return this.getTypedRuleContext(ValueSetRuleContext,0);
};

SdRuleContext.prototype.fixedValueRule = function() {
    return this.getTypedRuleContext(FixedValueRuleContext,0);
};

SdRuleContext.prototype.containsRule = function() {
    return this.getTypedRuleContext(ContainsRuleContext,0);
};

SdRuleContext.prototype.onlyRule = function() {
    return this.getTypedRuleContext(OnlyRuleContext,0);
};

SdRuleContext.prototype.obeysRule = function() {
    return this.getTypedRuleContext(ObeysRuleContext,0);
};

SdRuleContext.prototype.caretValueRule = function() {
    return this.getTypedRuleContext(CaretValueRuleContext,0);
};

SdRuleContext.prototype.insertRule = function() {
    return this.getTypedRuleContext(InsertRuleContext,0);
};

SdRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterSdRule(this);
	}
};

SdRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitSdRule(this);
	}
};

SdRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitSdRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.SdRuleContext = SdRuleContext;

FSHParser.prototype.sdRule = function() {

    var localctx = new SdRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, FSHParser.RULE_sdRule);
    try {
        this.state = 209;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 200;
            this.cardRule();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 201;
            this.flagRule();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 202;
            this.valueSetRule();
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 203;
            this.fixedValueRule();
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 204;
            this.containsRule();
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 205;
            this.onlyRule();
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 206;
            this.obeysRule();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 207;
            this.caretValueRule();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 208;
            this.insertRule();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InstanceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_instance;
    return this;
}

InstanceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceContext.prototype.constructor = InstanceContext;

InstanceContext.prototype.KW_INSTANCE = function() {
    return this.getToken(FSHParser.KW_INSTANCE, 0);
};

InstanceContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

InstanceContext.prototype.instanceMetadata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstanceMetadataContext);
    } else {
        return this.getTypedRuleContext(InstanceMetadataContext,i);
    }
};

InstanceContext.prototype.instanceRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InstanceRuleContext);
    } else {
        return this.getTypedRuleContext(InstanceRuleContext,i);
    }
};

InstanceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterInstance(this);
	}
};

InstanceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitInstance(this);
	}
};

InstanceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitInstance(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.InstanceContext = InstanceContext;

FSHParser.prototype.instance = function() {

    var localctx = new InstanceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, FSHParser.RULE_instance);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(FSHParser.KW_INSTANCE);
        this.state = 212;
        this.match(FSHParser.SEQUENCE);
        this.state = 216;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_INSTANCEOF) | (1 << FSHParser.KW_MIXINS) | (1 << FSHParser.KW_TITLE) | (1 << FSHParser.KW_DESCRIPTION) | (1 << FSHParser.KW_USAGE))) !== 0)) {
            this.state = 213;
            this.instanceMetadata();
            this.state = 218;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 222;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.STAR) {
            this.state = 219;
            this.instanceRule();
            this.state = 224;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InstanceMetadataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_instanceMetadata;
    return this;
}

InstanceMetadataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceMetadataContext.prototype.constructor = InstanceMetadataContext;

InstanceMetadataContext.prototype.instanceOf = function() {
    return this.getTypedRuleContext(InstanceOfContext,0);
};

InstanceMetadataContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

InstanceMetadataContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

InstanceMetadataContext.prototype.usage = function() {
    return this.getTypedRuleContext(UsageContext,0);
};

InstanceMetadataContext.prototype.mixins = function() {
    return this.getTypedRuleContext(MixinsContext,0);
};

InstanceMetadataContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterInstanceMetadata(this);
	}
};

InstanceMetadataContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitInstanceMetadata(this);
	}
};

InstanceMetadataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitInstanceMetadata(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.InstanceMetadataContext = InstanceMetadataContext;

FSHParser.prototype.instanceMetadata = function() {

    var localctx = new InstanceMetadataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, FSHParser.RULE_instanceMetadata);
    try {
        this.state = 230;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_INSTANCEOF:
            this.enterOuterAlt(localctx, 1);
            this.state = 225;
            this.instanceOf();
            break;
        case FSHParser.KW_TITLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 226;
            this.title();
            break;
        case FSHParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 227;
            this.description();
            break;
        case FSHParser.KW_USAGE:
            this.enterOuterAlt(localctx, 4);
            this.state = 228;
            this.usage();
            break;
        case FSHParser.KW_MIXINS:
            this.enterOuterAlt(localctx, 5);
            this.state = 229;
            this.mixins();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InstanceRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_instanceRule;
    return this;
}

InstanceRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceRuleContext.prototype.constructor = InstanceRuleContext;

InstanceRuleContext.prototype.fixedValueRule = function() {
    return this.getTypedRuleContext(FixedValueRuleContext,0);
};

InstanceRuleContext.prototype.insertRule = function() {
    return this.getTypedRuleContext(InsertRuleContext,0);
};

InstanceRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterInstanceRule(this);
	}
};

InstanceRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitInstanceRule(this);
	}
};

InstanceRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitInstanceRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.InstanceRuleContext = InstanceRuleContext;

FSHParser.prototype.instanceRule = function() {

    var localctx = new InstanceRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, FSHParser.RULE_instanceRule);
    try {
        this.state = 234;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 232;
            this.fixedValueRule();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 233;
            this.insertRule();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InvariantContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_invariant;
    return this;
}

InvariantContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvariantContext.prototype.constructor = InvariantContext;

InvariantContext.prototype.KW_INVARIANT = function() {
    return this.getToken(FSHParser.KW_INVARIANT, 0);
};

InvariantContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

InvariantContext.prototype.invariantMetadata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(InvariantMetadataContext);
    } else {
        return this.getTypedRuleContext(InvariantMetadataContext,i);
    }
};

InvariantContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterInvariant(this);
	}
};

InvariantContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitInvariant(this);
	}
};

InvariantContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitInvariant(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.InvariantContext = InvariantContext;

FSHParser.prototype.invariant = function() {

    var localctx = new InvariantContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, FSHParser.RULE_invariant);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 236;
        this.match(FSHParser.KW_INVARIANT);
        this.state = 237;
        this.match(FSHParser.SEQUENCE);
        this.state = 239; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 238;
            this.invariantMetadata();
            this.state = 241; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_DESCRIPTION) | (1 << FSHParser.KW_EXPRESSION) | (1 << FSHParser.KW_XPATH) | (1 << FSHParser.KW_SEVERITY))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InvariantMetadataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_invariantMetadata;
    return this;
}

InvariantMetadataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InvariantMetadataContext.prototype.constructor = InvariantMetadataContext;

InvariantMetadataContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

InvariantMetadataContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

InvariantMetadataContext.prototype.xpath = function() {
    return this.getTypedRuleContext(XpathContext,0);
};

InvariantMetadataContext.prototype.severity = function() {
    return this.getTypedRuleContext(SeverityContext,0);
};

InvariantMetadataContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterInvariantMetadata(this);
	}
};

InvariantMetadataContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitInvariantMetadata(this);
	}
};

InvariantMetadataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitInvariantMetadata(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.InvariantMetadataContext = InvariantMetadataContext;

FSHParser.prototype.invariantMetadata = function() {

    var localctx = new InvariantMetadataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, FSHParser.RULE_invariantMetadata);
    try {
        this.state = 247;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 1);
            this.state = 243;
            this.description();
            break;
        case FSHParser.KW_EXPRESSION:
            this.enterOuterAlt(localctx, 2);
            this.state = 244;
            this.expression();
            break;
        case FSHParser.KW_XPATH:
            this.enterOuterAlt(localctx, 3);
            this.state = 245;
            this.xpath();
            break;
        case FSHParser.KW_SEVERITY:
            this.enterOuterAlt(localctx, 4);
            this.state = 246;
            this.severity();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueSetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_valueSet;
    return this;
}

ValueSetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueSetContext.prototype.constructor = ValueSetContext;

ValueSetContext.prototype.KW_VALUESET = function() {
    return this.getToken(FSHParser.KW_VALUESET, 0);
};

ValueSetContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

ValueSetContext.prototype.vsMetadata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VsMetadataContext);
    } else {
        return this.getTypedRuleContext(VsMetadataContext,i);
    }
};

ValueSetContext.prototype.vsRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VsRuleContext);
    } else {
        return this.getTypedRuleContext(VsRuleContext,i);
    }
};

ValueSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterValueSet(this);
	}
};

ValueSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitValueSet(this);
	}
};

ValueSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitValueSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ValueSetContext = ValueSetContext;

FSHParser.prototype.valueSet = function() {

    var localctx = new ValueSetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, FSHParser.RULE_valueSet);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(FSHParser.KW_VALUESET);
        this.state = 250;
        this.match(FSHParser.SEQUENCE);
        this.state = 254;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_ID) | (1 << FSHParser.KW_TITLE) | (1 << FSHParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 251;
            this.vsMetadata();
            this.state = 256;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 260;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.STAR) {
            this.state = 257;
            this.vsRule();
            this.state = 262;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsMetadataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsMetadata;
    return this;
}

VsMetadataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsMetadataContext.prototype.constructor = VsMetadataContext;

VsMetadataContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

VsMetadataContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

VsMetadataContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

VsMetadataContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsMetadata(this);
	}
};

VsMetadataContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsMetadata(this);
	}
};

VsMetadataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsMetadata(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsMetadataContext = VsMetadataContext;

FSHParser.prototype.vsMetadata = function() {

    var localctx = new VsMetadataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, FSHParser.RULE_vsMetadata);
    try {
        this.state = 266;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 263;
            this.id();
            break;
        case FSHParser.KW_TITLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 264;
            this.title();
            break;
        case FSHParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 265;
            this.description();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsRule;
    return this;
}

VsRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsRuleContext.prototype.constructor = VsRuleContext;

VsRuleContext.prototype.vsComponent = function() {
    return this.getTypedRuleContext(VsComponentContext,0);
};

VsRuleContext.prototype.caretValueRule = function() {
    return this.getTypedRuleContext(CaretValueRuleContext,0);
};

VsRuleContext.prototype.insertRule = function() {
    return this.getTypedRuleContext(InsertRuleContext,0);
};

VsRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsRule(this);
	}
};

VsRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsRule(this);
	}
};

VsRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsRuleContext = VsRuleContext;

FSHParser.prototype.vsRule = function() {

    var localctx = new VsRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, FSHParser.RULE_vsRule);
    try {
        this.state = 271;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 268;
            this.vsComponent();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 269;
            this.caretValueRule();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 270;
            this.insertRule();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CodeSystemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_codeSystem;
    return this;
}

CodeSystemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeSystemContext.prototype.constructor = CodeSystemContext;

CodeSystemContext.prototype.KW_CODESYSTEM = function() {
    return this.getToken(FSHParser.KW_CODESYSTEM, 0);
};

CodeSystemContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

CodeSystemContext.prototype.csMetadata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CsMetadataContext);
    } else {
        return this.getTypedRuleContext(CsMetadataContext,i);
    }
};

CodeSystemContext.prototype.csRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CsRuleContext);
    } else {
        return this.getTypedRuleContext(CsRuleContext,i);
    }
};

CodeSystemContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCodeSystem(this);
	}
};

CodeSystemContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCodeSystem(this);
	}
};

CodeSystemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCodeSystem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CodeSystemContext = CodeSystemContext;

FSHParser.prototype.codeSystem = function() {

    var localctx = new CodeSystemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, FSHParser.RULE_codeSystem);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 273;
        this.match(FSHParser.KW_CODESYSTEM);
        this.state = 274;
        this.match(FSHParser.SEQUENCE);
        this.state = 278;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_ID) | (1 << FSHParser.KW_TITLE) | (1 << FSHParser.KW_DESCRIPTION))) !== 0)) {
            this.state = 275;
            this.csMetadata();
            this.state = 280;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 284;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.STAR) {
            this.state = 281;
            this.csRule();
            this.state = 286;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CsMetadataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_csMetadata;
    return this;
}

CsMetadataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CsMetadataContext.prototype.constructor = CsMetadataContext;

CsMetadataContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

CsMetadataContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

CsMetadataContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

CsMetadataContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCsMetadata(this);
	}
};

CsMetadataContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCsMetadata(this);
	}
};

CsMetadataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCsMetadata(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CsMetadataContext = CsMetadataContext;

FSHParser.prototype.csMetadata = function() {

    var localctx = new CsMetadataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, FSHParser.RULE_csMetadata);
    try {
        this.state = 290;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 287;
            this.id();
            break;
        case FSHParser.KW_TITLE:
            this.enterOuterAlt(localctx, 2);
            this.state = 288;
            this.title();
            break;
        case FSHParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 3);
            this.state = 289;
            this.description();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CsRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_csRule;
    return this;
}

CsRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CsRuleContext.prototype.constructor = CsRuleContext;

CsRuleContext.prototype.concept = function() {
    return this.getTypedRuleContext(ConceptContext,0);
};

CsRuleContext.prototype.caretValueRule = function() {
    return this.getTypedRuleContext(CaretValueRuleContext,0);
};

CsRuleContext.prototype.insertRule = function() {
    return this.getTypedRuleContext(InsertRuleContext,0);
};

CsRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCsRule(this);
	}
};

CsRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCsRule(this);
	}
};

CsRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCsRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CsRuleContext = CsRuleContext;

FSHParser.prototype.csRule = function() {

    var localctx = new CsRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, FSHParser.RULE_csRule);
    try {
        this.state = 295;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,21,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 292;
            this.concept();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 293;
            this.caretValueRule();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 294;
            this.insertRule();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RuleSetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_ruleSet;
    return this;
}

RuleSetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleSetContext.prototype.constructor = RuleSetContext;

RuleSetContext.prototype.KW_RULESET = function() {
    return this.getToken(FSHParser.KW_RULESET, 0);
};

RuleSetContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

RuleSetContext.prototype.ruleSetRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RuleSetRuleContext);
    } else {
        return this.getTypedRuleContext(RuleSetRuleContext,i);
    }
};

RuleSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterRuleSet(this);
	}
};

RuleSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitRuleSet(this);
	}
};

RuleSetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitRuleSet(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.RuleSetContext = RuleSetContext;

FSHParser.prototype.ruleSet = function() {

    var localctx = new RuleSetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, FSHParser.RULE_ruleSet);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 297;
        this.match(FSHParser.KW_RULESET);
        this.state = 298;
        this.match(FSHParser.SEQUENCE);
        this.state = 300; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 299;
            this.ruleSetRule();
            this.state = 302; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===FSHParser.STAR);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RuleSetRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_ruleSetRule;
    return this;
}

RuleSetRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RuleSetRuleContext.prototype.constructor = RuleSetRuleContext;

RuleSetRuleContext.prototype.sdRule = function() {
    return this.getTypedRuleContext(SdRuleContext,0);
};

RuleSetRuleContext.prototype.concept = function() {
    return this.getTypedRuleContext(ConceptContext,0);
};

RuleSetRuleContext.prototype.vsComponent = function() {
    return this.getTypedRuleContext(VsComponentContext,0);
};

RuleSetRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterRuleSetRule(this);
	}
};

RuleSetRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitRuleSetRule(this);
	}
};

RuleSetRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitRuleSetRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.RuleSetRuleContext = RuleSetRuleContext;

FSHParser.prototype.ruleSetRule = function() {

    var localctx = new RuleSetRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, FSHParser.RULE_ruleSetRule);
    try {
        this.state = 307;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 304;
            this.sdRule();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 305;
            this.concept();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 306;
            this.vsComponent();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MappingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_mapping;
    return this;
}

MappingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingContext.prototype.constructor = MappingContext;

MappingContext.prototype.KW_MAPPING = function() {
    return this.getToken(FSHParser.KW_MAPPING, 0);
};

MappingContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

MappingContext.prototype.mappingMetadata = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MappingMetadataContext);
    } else {
        return this.getTypedRuleContext(MappingMetadataContext,i);
    }
};

MappingContext.prototype.mappingEntityRule = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(MappingEntityRuleContext);
    } else {
        return this.getTypedRuleContext(MappingEntityRuleContext,i);
    }
};

MappingContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterMapping(this);
	}
};

MappingContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitMapping(this);
	}
};

MappingContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitMapping(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.MappingContext = MappingContext;

FSHParser.prototype.mapping = function() {

    var localctx = new MappingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, FSHParser.RULE_mapping);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 309;
        this.match(FSHParser.KW_MAPPING);
        this.state = 310;
        this.match(FSHParser.SEQUENCE);
        this.state = 314;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_ID) | (1 << FSHParser.KW_TITLE) | (1 << FSHParser.KW_DESCRIPTION) | (1 << FSHParser.KW_SOURCE) | (1 << FSHParser.KW_TARGET))) !== 0)) {
            this.state = 311;
            this.mappingMetadata();
            this.state = 316;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 320;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.STAR) {
            this.state = 317;
            this.mappingEntityRule();
            this.state = 322;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MappingMetadataContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_mappingMetadata;
    return this;
}

MappingMetadataContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingMetadataContext.prototype.constructor = MappingMetadataContext;

MappingMetadataContext.prototype.id = function() {
    return this.getTypedRuleContext(IdContext,0);
};

MappingMetadataContext.prototype.source = function() {
    return this.getTypedRuleContext(SourceContext,0);
};

MappingMetadataContext.prototype.target = function() {
    return this.getTypedRuleContext(TargetContext,0);
};

MappingMetadataContext.prototype.description = function() {
    return this.getTypedRuleContext(DescriptionContext,0);
};

MappingMetadataContext.prototype.title = function() {
    return this.getTypedRuleContext(TitleContext,0);
};

MappingMetadataContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterMappingMetadata(this);
	}
};

MappingMetadataContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitMappingMetadata(this);
	}
};

MappingMetadataContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitMappingMetadata(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.MappingMetadataContext = MappingMetadataContext;

FSHParser.prototype.mappingMetadata = function() {

    var localctx = new MappingMetadataContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, FSHParser.RULE_mappingMetadata);
    try {
        this.state = 328;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 323;
            this.id();
            break;
        case FSHParser.KW_SOURCE:
            this.enterOuterAlt(localctx, 2);
            this.state = 324;
            this.source();
            break;
        case FSHParser.KW_TARGET:
            this.enterOuterAlt(localctx, 3);
            this.state = 325;
            this.target();
            break;
        case FSHParser.KW_DESCRIPTION:
            this.enterOuterAlt(localctx, 4);
            this.state = 326;
            this.description();
            break;
        case FSHParser.KW_TITLE:
            this.enterOuterAlt(localctx, 5);
            this.state = 327;
            this.title();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MappingEntityRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_mappingEntityRule;
    return this;
}

MappingEntityRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingEntityRuleContext.prototype.constructor = MappingEntityRuleContext;

MappingEntityRuleContext.prototype.mappingRule = function() {
    return this.getTypedRuleContext(MappingRuleContext,0);
};

MappingEntityRuleContext.prototype.insertRule = function() {
    return this.getTypedRuleContext(InsertRuleContext,0);
};

MappingEntityRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterMappingEntityRule(this);
	}
};

MappingEntityRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitMappingEntityRule(this);
	}
};

MappingEntityRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitMappingEntityRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.MappingEntityRuleContext = MappingEntityRuleContext;

FSHParser.prototype.mappingEntityRule = function() {

    var localctx = new MappingEntityRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, FSHParser.RULE_mappingEntityRule);
    try {
        this.state = 332;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 330;
            this.mappingRule();
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 331;
            this.insertRule();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ParentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_parent;
    return this;
}

ParentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ParentContext.prototype.constructor = ParentContext;

ParentContext.prototype.KW_PARENT = function() {
    return this.getToken(FSHParser.KW_PARENT, 0);
};

ParentContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

ParentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterParent(this);
	}
};

ParentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitParent(this);
	}
};

ParentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitParent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ParentContext = ParentContext;

FSHParser.prototype.parent = function() {

    var localctx = new ParentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, FSHParser.RULE_parent);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 334;
        this.match(FSHParser.KW_PARENT);
        this.state = 335;
        this.match(FSHParser.SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_id;
    return this;
}

IdContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdContext.prototype.constructor = IdContext;

IdContext.prototype.KW_ID = function() {
    return this.getToken(FSHParser.KW_ID, 0);
};

IdContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

IdContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterId(this);
	}
};

IdContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitId(this);
	}
};

IdContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitId(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.IdContext = IdContext;

FSHParser.prototype.id = function() {

    var localctx = new IdContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, FSHParser.RULE_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 337;
        this.match(FSHParser.KW_ID);
        this.state = 338;
        this.match(FSHParser.SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TitleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_title;
    return this;
}

TitleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TitleContext.prototype.constructor = TitleContext;

TitleContext.prototype.KW_TITLE = function() {
    return this.getToken(FSHParser.KW_TITLE, 0);
};

TitleContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

TitleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterTitle(this);
	}
};

TitleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitTitle(this);
	}
};

TitleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitTitle(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.TitleContext = TitleContext;

FSHParser.prototype.title = function() {

    var localctx = new TitleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, FSHParser.RULE_title);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 340;
        this.match(FSHParser.KW_TITLE);
        this.state = 341;
        this.match(FSHParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function DescriptionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_description;
    return this;
}

DescriptionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
DescriptionContext.prototype.constructor = DescriptionContext;

DescriptionContext.prototype.KW_DESCRIPTION = function() {
    return this.getToken(FSHParser.KW_DESCRIPTION, 0);
};

DescriptionContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

DescriptionContext.prototype.MULTILINE_STRING = function() {
    return this.getToken(FSHParser.MULTILINE_STRING, 0);
};

DescriptionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterDescription(this);
	}
};

DescriptionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitDescription(this);
	}
};

DescriptionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitDescription(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.DescriptionContext = DescriptionContext;

FSHParser.prototype.description = function() {

    var localctx = new DescriptionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, FSHParser.RULE_description);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 343;
        this.match(FSHParser.KW_DESCRIPTION);
        this.state = 344;
        _la = this._input.LA(1);
        if(!(_la===FSHParser.STRING || _la===FSHParser.MULTILINE_STRING)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.KW_EXPRESSION = function() {
    return this.getToken(FSHParser.KW_EXPRESSION, 0);
};

ExpressionContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ExpressionContext = ExpressionContext;

FSHParser.prototype.expression = function() {

    var localctx = new ExpressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, FSHParser.RULE_expression);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 346;
        this.match(FSHParser.KW_EXPRESSION);
        this.state = 347;
        this.match(FSHParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function XpathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_xpath;
    return this;
}

XpathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
XpathContext.prototype.constructor = XpathContext;

XpathContext.prototype.KW_XPATH = function() {
    return this.getToken(FSHParser.KW_XPATH, 0);
};

XpathContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

XpathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterXpath(this);
	}
};

XpathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitXpath(this);
	}
};

XpathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitXpath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.XpathContext = XpathContext;

FSHParser.prototype.xpath = function() {

    var localctx = new XpathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, FSHParser.RULE_xpath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 349;
        this.match(FSHParser.KW_XPATH);
        this.state = 350;
        this.match(FSHParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SeverityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_severity;
    return this;
}

SeverityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SeverityContext.prototype.constructor = SeverityContext;

SeverityContext.prototype.KW_SEVERITY = function() {
    return this.getToken(FSHParser.KW_SEVERITY, 0);
};

SeverityContext.prototype.CODE = function() {
    return this.getToken(FSHParser.CODE, 0);
};

SeverityContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterSeverity(this);
	}
};

SeverityContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitSeverity(this);
	}
};

SeverityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitSeverity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.SeverityContext = SeverityContext;

FSHParser.prototype.severity = function() {

    var localctx = new SeverityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, FSHParser.RULE_severity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 352;
        this.match(FSHParser.KW_SEVERITY);
        this.state = 353;
        this.match(FSHParser.CODE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InstanceOfContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_instanceOf;
    return this;
}

InstanceOfContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InstanceOfContext.prototype.constructor = InstanceOfContext;

InstanceOfContext.prototype.KW_INSTANCEOF = function() {
    return this.getToken(FSHParser.KW_INSTANCEOF, 0);
};

InstanceOfContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

InstanceOfContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterInstanceOf(this);
	}
};

InstanceOfContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitInstanceOf(this);
	}
};

InstanceOfContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitInstanceOf(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.InstanceOfContext = InstanceOfContext;

FSHParser.prototype.instanceOf = function() {

    var localctx = new InstanceOfContext(this, this._ctx, this.state);
    this.enterRule(localctx, 60, FSHParser.RULE_instanceOf);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 355;
        this.match(FSHParser.KW_INSTANCEOF);
        this.state = 356;
        this.match(FSHParser.SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function UsageContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_usage;
    return this;
}

UsageContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsageContext.prototype.constructor = UsageContext;

UsageContext.prototype.KW_USAGE = function() {
    return this.getToken(FSHParser.KW_USAGE, 0);
};

UsageContext.prototype.CODE = function() {
    return this.getToken(FSHParser.CODE, 0);
};

UsageContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterUsage(this);
	}
};

UsageContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitUsage(this);
	}
};

UsageContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitUsage(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.UsageContext = UsageContext;

FSHParser.prototype.usage = function() {

    var localctx = new UsageContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, FSHParser.RULE_usage);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 358;
        this.match(FSHParser.KW_USAGE);
        this.state = 359;
        this.match(FSHParser.CODE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MixinsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_mixins;
    return this;
}

MixinsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MixinsContext.prototype.constructor = MixinsContext;

MixinsContext.prototype.KW_MIXINS = function() {
    return this.getToken(FSHParser.KW_MIXINS, 0);
};

MixinsContext.prototype.SEQUENCE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.SEQUENCE);
    } else {
        return this.getToken(FSHParser.SEQUENCE, i);
    }
};


MixinsContext.prototype.COMMA_DELIMITED_SEQUENCES = function() {
    return this.getToken(FSHParser.COMMA_DELIMITED_SEQUENCES, 0);
};

MixinsContext.prototype.KW_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_AND);
    } else {
        return this.getToken(FSHParser.KW_AND, i);
    }
};


MixinsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterMixins(this);
	}
};

MixinsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitMixins(this);
	}
};

MixinsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitMixins(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.MixinsContext = MixinsContext;

FSHParser.prototype.mixins = function() {

    var localctx = new MixinsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, FSHParser.RULE_mixins);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 361;
        this.match(FSHParser.KW_MIXINS);
        this.state = 371;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.SEQUENCE:
            this.state = 366;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,28,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 362;
                    this.match(FSHParser.SEQUENCE);
                    this.state = 363;
                    this.match(FSHParser.KW_AND); 
                }
                this.state = 368;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,28,this._ctx);
            }

            this.state = 369;
            this.match(FSHParser.SEQUENCE);
            break;
        case FSHParser.COMMA_DELIMITED_SEQUENCES:
            this.state = 370;
            this.match(FSHParser.COMMA_DELIMITED_SEQUENCES);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function SourceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_source;
    return this;
}

SourceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SourceContext.prototype.constructor = SourceContext;

SourceContext.prototype.KW_SOURCE = function() {
    return this.getToken(FSHParser.KW_SOURCE, 0);
};

SourceContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

SourceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterSource(this);
	}
};

SourceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitSource(this);
	}
};

SourceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitSource(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.SourceContext = SourceContext;

FSHParser.prototype.source = function() {

    var localctx = new SourceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, FSHParser.RULE_source);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 373;
        this.match(FSHParser.KW_SOURCE);
        this.state = 374;
        this.match(FSHParser.SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TargetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_target;
    return this;
}

TargetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetContext.prototype.constructor = TargetContext;

TargetContext.prototype.KW_TARGET = function() {
    return this.getToken(FSHParser.KW_TARGET, 0);
};

TargetContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

TargetContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterTarget(this);
	}
};

TargetContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitTarget(this);
	}
};

TargetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitTarget(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.TargetContext = TargetContext;

FSHParser.prototype.target = function() {

    var localctx = new TargetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 68, FSHParser.RULE_target);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 376;
        this.match(FSHParser.KW_TARGET);
        this.state = 377;
        this.match(FSHParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CardRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_cardRule;
    return this;
}

CardRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CardRuleContext.prototype.constructor = CardRuleContext;

CardRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

CardRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

CardRuleContext.prototype.CARD = function() {
    return this.getToken(FSHParser.CARD, 0);
};

CardRuleContext.prototype.flag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FlagContext);
    } else {
        return this.getTypedRuleContext(FlagContext,i);
    }
};

CardRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCardRule(this);
	}
};

CardRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCardRule(this);
	}
};

CardRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCardRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CardRuleContext = CardRuleContext;

FSHParser.prototype.cardRule = function() {

    var localctx = new CardRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 70, FSHParser.RULE_cardRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 379;
        this.match(FSHParser.STAR);
        this.state = 380;
        this.path();
        this.state = 381;
        this.match(FSHParser.CARD);
        this.state = 385;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_MOD) | (1 << FSHParser.KW_MS) | (1 << FSHParser.KW_SU) | (1 << FSHParser.KW_TU) | (1 << FSHParser.KW_NORMATIVE) | (1 << FSHParser.KW_DRAFT))) !== 0)) {
            this.state = 382;
            this.flag();
            this.state = 387;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FlagRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_flagRule;
    return this;
}

FlagRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlagRuleContext.prototype.constructor = FlagRuleContext;

FlagRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

FlagRuleContext.prototype.path = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PathContext);
    } else {
        return this.getTypedRuleContext(PathContext,i);
    }
};

FlagRuleContext.prototype.paths = function() {
    return this.getTypedRuleContext(PathsContext,0);
};

FlagRuleContext.prototype.flag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FlagContext);
    } else {
        return this.getTypedRuleContext(FlagContext,i);
    }
};

FlagRuleContext.prototype.KW_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_AND);
    } else {
        return this.getToken(FSHParser.KW_AND, i);
    }
};


FlagRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterFlagRule(this);
	}
};

FlagRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitFlagRule(this);
	}
};

FlagRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitFlagRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.FlagRuleContext = FlagRuleContext;

FSHParser.prototype.flagRule = function() {

    var localctx = new FlagRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 72, FSHParser.RULE_flagRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 388;
        this.match(FSHParser.STAR);
        this.state = 399;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_SYSTEM:
        case FSHParser.SEQUENCE:
            this.state = 394;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 389;
                    this.path();
                    this.state = 390;
                    this.match(FSHParser.KW_AND); 
                }
                this.state = 396;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
            }

            this.state = 397;
            this.path();
            break;
        case FSHParser.COMMA_DELIMITED_SEQUENCES:
            this.state = 398;
            this.paths();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this.state = 402; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 401;
            this.flag();
            this.state = 404; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_MOD) | (1 << FSHParser.KW_MS) | (1 << FSHParser.KW_SU) | (1 << FSHParser.KW_TU) | (1 << FSHParser.KW_NORMATIVE) | (1 << FSHParser.KW_DRAFT))) !== 0));
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueSetRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_valueSetRule;
    return this;
}

ValueSetRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueSetRuleContext.prototype.constructor = ValueSetRuleContext;

ValueSetRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

ValueSetRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

ValueSetRuleContext.prototype.KW_FROM = function() {
    return this.getToken(FSHParser.KW_FROM, 0);
};

ValueSetRuleContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

ValueSetRuleContext.prototype.KW_UNITS = function() {
    return this.getToken(FSHParser.KW_UNITS, 0);
};

ValueSetRuleContext.prototype.strength = function() {
    return this.getTypedRuleContext(StrengthContext,0);
};

ValueSetRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterValueSetRule(this);
	}
};

ValueSetRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitValueSetRule(this);
	}
};

ValueSetRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitValueSetRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ValueSetRuleContext = ValueSetRuleContext;

FSHParser.prototype.valueSetRule = function() {

    var localctx = new ValueSetRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 74, FSHParser.RULE_valueSetRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 406;
        this.match(FSHParser.STAR);
        this.state = 407;
        this.path();
        this.state = 409;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_UNITS) {
            this.state = 408;
            this.match(FSHParser.KW_UNITS);
        }

        this.state = 411;
        this.match(FSHParser.KW_FROM);
        this.state = 412;
        this.match(FSHParser.SEQUENCE);
        this.state = 414;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FSHParser.KW_EXAMPLE - 29)) | (1 << (FSHParser.KW_PREFERRED - 29)) | (1 << (FSHParser.KW_EXTENSIBLE - 29)) | (1 << (FSHParser.KW_REQUIRED - 29)))) !== 0)) {
            this.state = 413;
            this.strength();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FixedValueRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_fixedValueRule;
    return this;
}

FixedValueRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FixedValueRuleContext.prototype.constructor = FixedValueRuleContext;

FixedValueRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

FixedValueRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

FixedValueRuleContext.prototype.EQUAL = function() {
    return this.getToken(FSHParser.EQUAL, 0);
};

FixedValueRuleContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

FixedValueRuleContext.prototype.KW_UNITS = function() {
    return this.getToken(FSHParser.KW_UNITS, 0);
};

FixedValueRuleContext.prototype.KW_EXACTLY = function() {
    return this.getToken(FSHParser.KW_EXACTLY, 0);
};

FixedValueRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterFixedValueRule(this);
	}
};

FixedValueRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitFixedValueRule(this);
	}
};

FixedValueRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitFixedValueRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.FixedValueRuleContext = FixedValueRuleContext;

FSHParser.prototype.fixedValueRule = function() {

    var localctx = new FixedValueRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 76, FSHParser.RULE_fixedValueRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 416;
        this.match(FSHParser.STAR);
        this.state = 417;
        this.path();
        this.state = 419;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_UNITS) {
            this.state = 418;
            this.match(FSHParser.KW_UNITS);
        }

        this.state = 421;
        this.match(FSHParser.EQUAL);
        this.state = 422;
        this.value();
        this.state = 424;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_EXACTLY) {
            this.state = 423;
            this.match(FSHParser.KW_EXACTLY);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ContainsRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_containsRule;
    return this;
}

ContainsRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ContainsRuleContext.prototype.constructor = ContainsRuleContext;

ContainsRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

ContainsRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

ContainsRuleContext.prototype.KW_CONTAINS = function() {
    return this.getToken(FSHParser.KW_CONTAINS, 0);
};

ContainsRuleContext.prototype.item = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ItemContext);
    } else {
        return this.getTypedRuleContext(ItemContext,i);
    }
};

ContainsRuleContext.prototype.KW_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_AND);
    } else {
        return this.getToken(FSHParser.KW_AND, i);
    }
};


ContainsRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterContainsRule(this);
	}
};

ContainsRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitContainsRule(this);
	}
};

ContainsRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitContainsRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ContainsRuleContext = ContainsRuleContext;

FSHParser.prototype.containsRule = function() {

    var localctx = new ContainsRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 78, FSHParser.RULE_containsRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 426;
        this.match(FSHParser.STAR);
        this.state = 427;
        this.path();
        this.state = 428;
        this.match(FSHParser.KW_CONTAINS);
        this.state = 429;
        this.item();
        this.state = 434;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.KW_AND) {
            this.state = 430;
            this.match(FSHParser.KW_AND);
            this.state = 431;
            this.item();
            this.state = 436;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function OnlyRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_onlyRule;
    return this;
}

OnlyRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OnlyRuleContext.prototype.constructor = OnlyRuleContext;

OnlyRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

OnlyRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

OnlyRuleContext.prototype.KW_ONLY = function() {
    return this.getToken(FSHParser.KW_ONLY, 0);
};

OnlyRuleContext.prototype.targetType = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(TargetTypeContext);
    } else {
        return this.getTypedRuleContext(TargetTypeContext,i);
    }
};

OnlyRuleContext.prototype.KW_OR = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_OR);
    } else {
        return this.getToken(FSHParser.KW_OR, i);
    }
};


OnlyRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterOnlyRule(this);
	}
};

OnlyRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitOnlyRule(this);
	}
};

OnlyRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitOnlyRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.OnlyRuleContext = OnlyRuleContext;

FSHParser.prototype.onlyRule = function() {

    var localctx = new OnlyRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 80, FSHParser.RULE_onlyRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 437;
        this.match(FSHParser.STAR);
        this.state = 438;
        this.path();
        this.state = 439;
        this.match(FSHParser.KW_ONLY);
        this.state = 440;
        this.targetType();
        this.state = 445;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.KW_OR) {
            this.state = 441;
            this.match(FSHParser.KW_OR);
            this.state = 442;
            this.targetType();
            this.state = 447;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ObeysRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_obeysRule;
    return this;
}

ObeysRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObeysRuleContext.prototype.constructor = ObeysRuleContext;

ObeysRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

ObeysRuleContext.prototype.KW_OBEYS = function() {
    return this.getToken(FSHParser.KW_OBEYS, 0);
};

ObeysRuleContext.prototype.SEQUENCE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.SEQUENCE);
    } else {
        return this.getToken(FSHParser.SEQUENCE, i);
    }
};


ObeysRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

ObeysRuleContext.prototype.KW_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_AND);
    } else {
        return this.getToken(FSHParser.KW_AND, i);
    }
};


ObeysRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterObeysRule(this);
	}
};

ObeysRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitObeysRule(this);
	}
};

ObeysRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitObeysRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ObeysRuleContext = ObeysRuleContext;

FSHParser.prototype.obeysRule = function() {

    var localctx = new ObeysRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 82, FSHParser.RULE_obeysRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 448;
        this.match(FSHParser.STAR);
        this.state = 450;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_SYSTEM || _la===FSHParser.SEQUENCE) {
            this.state = 449;
            this.path();
        }

        this.state = 452;
        this.match(FSHParser.KW_OBEYS);
        this.state = 453;
        this.match(FSHParser.SEQUENCE);
        this.state = 458;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===FSHParser.KW_AND) {
            this.state = 454;
            this.match(FSHParser.KW_AND);
            this.state = 455;
            this.match(FSHParser.SEQUENCE);
            this.state = 460;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaretValueRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_caretValueRule;
    return this;
}

CaretValueRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaretValueRuleContext.prototype.constructor = CaretValueRuleContext;

CaretValueRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

CaretValueRuleContext.prototype.caretPath = function() {
    return this.getTypedRuleContext(CaretPathContext,0);
};

CaretValueRuleContext.prototype.EQUAL = function() {
    return this.getToken(FSHParser.EQUAL, 0);
};

CaretValueRuleContext.prototype.value = function() {
    return this.getTypedRuleContext(ValueContext,0);
};

CaretValueRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

CaretValueRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCaretValueRule(this);
	}
};

CaretValueRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCaretValueRule(this);
	}
};

CaretValueRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCaretValueRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CaretValueRuleContext = CaretValueRuleContext;

FSHParser.prototype.caretValueRule = function() {

    var localctx = new CaretValueRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 84, FSHParser.RULE_caretValueRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 461;
        this.match(FSHParser.STAR);
        this.state = 463;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_SYSTEM || _la===FSHParser.SEQUENCE) {
            this.state = 462;
            this.path();
        }

        this.state = 465;
        this.caretPath();
        this.state = 466;
        this.match(FSHParser.EQUAL);
        this.state = 467;
        this.value();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function MappingRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_mappingRule;
    return this;
}

MappingRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
MappingRuleContext.prototype.constructor = MappingRuleContext;

MappingRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

MappingRuleContext.prototype.ARROW = function() {
    return this.getToken(FSHParser.ARROW, 0);
};

MappingRuleContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.STRING);
    } else {
        return this.getToken(FSHParser.STRING, i);
    }
};


MappingRuleContext.prototype.path = function() {
    return this.getTypedRuleContext(PathContext,0);
};

MappingRuleContext.prototype.CODE = function() {
    return this.getToken(FSHParser.CODE, 0);
};

MappingRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterMappingRule(this);
	}
};

MappingRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitMappingRule(this);
	}
};

MappingRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitMappingRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.MappingRuleContext = MappingRuleContext;

FSHParser.prototype.mappingRule = function() {

    var localctx = new MappingRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 86, FSHParser.RULE_mappingRule);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 469;
        this.match(FSHParser.STAR);
        this.state = 471;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_SYSTEM || _la===FSHParser.SEQUENCE) {
            this.state = 470;
            this.path();
        }

        this.state = 473;
        this.match(FSHParser.ARROW);
        this.state = 474;
        this.match(FSHParser.STRING);
        this.state = 476;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.STRING) {
            this.state = 475;
            this.match(FSHParser.STRING);
        }

        this.state = 479;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.CODE) {
            this.state = 478;
            this.match(FSHParser.CODE);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function InsertRuleContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_insertRule;
    return this;
}

InsertRuleContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
InsertRuleContext.prototype.constructor = InsertRuleContext;

InsertRuleContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

InsertRuleContext.prototype.KW_INSERT = function() {
    return this.getToken(FSHParser.KW_INSERT, 0);
};

InsertRuleContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

InsertRuleContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterInsertRule(this);
	}
};

InsertRuleContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitInsertRule(this);
	}
};

InsertRuleContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitInsertRule(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.InsertRuleContext = InsertRuleContext;

FSHParser.prototype.insertRule = function() {

    var localctx = new InsertRuleContext(this, this._ctx, this.state);
    this.enterRule(localctx, 88, FSHParser.RULE_insertRule);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 481;
        this.match(FSHParser.STAR);
        this.state = 482;
        this.match(FSHParser.KW_INSERT);
        this.state = 483;
        this.match(FSHParser.SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsComponent;
    return this;
}

VsComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsComponentContext.prototype.constructor = VsComponentContext;

VsComponentContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

VsComponentContext.prototype.vsConceptComponent = function() {
    return this.getTypedRuleContext(VsConceptComponentContext,0);
};

VsComponentContext.prototype.vsFilterComponent = function() {
    return this.getTypedRuleContext(VsFilterComponentContext,0);
};

VsComponentContext.prototype.KW_INCLUDE = function() {
    return this.getToken(FSHParser.KW_INCLUDE, 0);
};

VsComponentContext.prototype.KW_EXCLUDE = function() {
    return this.getToken(FSHParser.KW_EXCLUDE, 0);
};

VsComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsComponent(this);
	}
};

VsComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsComponent(this);
	}
};

VsComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsComponentContext = VsComponentContext;

FSHParser.prototype.vsComponent = function() {

    var localctx = new VsComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 90, FSHParser.RULE_vsComponent);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 485;
        this.match(FSHParser.STAR);
        this.state = 487;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_INCLUDE || _la===FSHParser.KW_EXCLUDE) {
            this.state = 486;
            _la = this._input.LA(1);
            if(!(_la===FSHParser.KW_INCLUDE || _la===FSHParser.KW_EXCLUDE)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

        this.state = 491;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.CODE:
        case FSHParser.COMMA_DELIMITED_CODES:
            this.state = 489;
            this.vsConceptComponent();
            break;
        case FSHParser.KW_CODES:
            this.state = 490;
            this.vsFilterComponent();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsConceptComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsConceptComponent;
    return this;
}

VsConceptComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsConceptComponentContext.prototype.constructor = VsConceptComponentContext;

VsConceptComponentContext.prototype.code = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(CodeContext);
    } else {
        return this.getTypedRuleContext(CodeContext,i);
    }
};

VsConceptComponentContext.prototype.vsComponentFrom = function() {
    return this.getTypedRuleContext(VsComponentFromContext,0);
};

VsConceptComponentContext.prototype.KW_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_AND);
    } else {
        return this.getToken(FSHParser.KW_AND, i);
    }
};


VsConceptComponentContext.prototype.COMMA_DELIMITED_CODES = function() {
    return this.getToken(FSHParser.COMMA_DELIMITED_CODES, 0);
};

VsConceptComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsConceptComponent(this);
	}
};

VsConceptComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsConceptComponent(this);
	}
};

VsConceptComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsConceptComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsConceptComponentContext = VsConceptComponentContext;

FSHParser.prototype.vsConceptComponent = function() {

    var localctx = new VsConceptComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 92, FSHParser.RULE_vsConceptComponent);
    var _la = 0; // Token type
    try {
        this.state = 509;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 493;
            this.code();
            this.state = 495;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FSHParser.KW_FROM) {
                this.state = 494;
                this.vsComponentFrom();
            }

            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 500; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 497;
            		this.code();
            		this.state = 498;
            		this.match(FSHParser.KW_AND);
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 502; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,49, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            this.state = 504;
            this.code();
            this.state = 505;
            this.vsComponentFrom();
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 507;
            this.match(FSHParser.COMMA_DELIMITED_CODES);
            this.state = 508;
            this.vsComponentFrom();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsFilterComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsFilterComponent;
    return this;
}

VsFilterComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsFilterComponentContext.prototype.constructor = VsFilterComponentContext;

VsFilterComponentContext.prototype.KW_CODES = function() {
    return this.getToken(FSHParser.KW_CODES, 0);
};

VsFilterComponentContext.prototype.vsComponentFrom = function() {
    return this.getTypedRuleContext(VsComponentFromContext,0);
};

VsFilterComponentContext.prototype.KW_WHERE = function() {
    return this.getToken(FSHParser.KW_WHERE, 0);
};

VsFilterComponentContext.prototype.vsFilterList = function() {
    return this.getTypedRuleContext(VsFilterListContext,0);
};

VsFilterComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsFilterComponent(this);
	}
};

VsFilterComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsFilterComponent(this);
	}
};

VsFilterComponentContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsFilterComponent(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsFilterComponentContext = VsFilterComponentContext;

FSHParser.prototype.vsFilterComponent = function() {

    var localctx = new VsFilterComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 94, FSHParser.RULE_vsFilterComponent);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 511;
        this.match(FSHParser.KW_CODES);
        this.state = 512;
        this.vsComponentFrom();
        this.state = 515;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_WHERE) {
            this.state = 513;
            this.match(FSHParser.KW_WHERE);
            this.state = 514;
            this.vsFilterList();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsComponentFromContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsComponentFrom;
    return this;
}

VsComponentFromContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsComponentFromContext.prototype.constructor = VsComponentFromContext;

VsComponentFromContext.prototype.KW_FROM = function() {
    return this.getToken(FSHParser.KW_FROM, 0);
};

VsComponentFromContext.prototype.vsFromSystem = function() {
    return this.getTypedRuleContext(VsFromSystemContext,0);
};

VsComponentFromContext.prototype.vsFromValueset = function() {
    return this.getTypedRuleContext(VsFromValuesetContext,0);
};

VsComponentFromContext.prototype.KW_AND = function() {
    return this.getToken(FSHParser.KW_AND, 0);
};

VsComponentFromContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsComponentFrom(this);
	}
};

VsComponentFromContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsComponentFrom(this);
	}
};

VsComponentFromContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsComponentFrom(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsComponentFromContext = VsComponentFromContext;

FSHParser.prototype.vsComponentFrom = function() {

    var localctx = new VsComponentFromContext(this, this._ctx, this.state);
    this.enterRule(localctx, 96, FSHParser.RULE_vsComponentFrom);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 517;
        this.match(FSHParser.KW_FROM);
        this.state = 528;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.KW_SYSTEM:
            this.state = 518;
            this.vsFromSystem();
            this.state = 521;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FSHParser.KW_AND) {
                this.state = 519;
                this.match(FSHParser.KW_AND);
                this.state = 520;
                this.vsFromValueset();
            }

            break;
        case FSHParser.KW_VSREFERENCE:
            this.state = 523;
            this.vsFromValueset();
            this.state = 526;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===FSHParser.KW_AND) {
                this.state = 524;
                this.match(FSHParser.KW_AND);
                this.state = 525;
                this.vsFromSystem();
            }

            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsFromSystemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsFromSystem;
    return this;
}

VsFromSystemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsFromSystemContext.prototype.constructor = VsFromSystemContext;

VsFromSystemContext.prototype.KW_SYSTEM = function() {
    return this.getToken(FSHParser.KW_SYSTEM, 0);
};

VsFromSystemContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

VsFromSystemContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsFromSystem(this);
	}
};

VsFromSystemContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsFromSystem(this);
	}
};

VsFromSystemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsFromSystem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsFromSystemContext = VsFromSystemContext;

FSHParser.prototype.vsFromSystem = function() {

    var localctx = new VsFromSystemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 98, FSHParser.RULE_vsFromSystem);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 530;
        this.match(FSHParser.KW_SYSTEM);
        this.state = 531;
        this.match(FSHParser.SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsFromValuesetContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsFromValueset;
    return this;
}

VsFromValuesetContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsFromValuesetContext.prototype.constructor = VsFromValuesetContext;

VsFromValuesetContext.prototype.KW_VSREFERENCE = function() {
    return this.getToken(FSHParser.KW_VSREFERENCE, 0);
};

VsFromValuesetContext.prototype.SEQUENCE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.SEQUENCE);
    } else {
        return this.getToken(FSHParser.SEQUENCE, i);
    }
};


VsFromValuesetContext.prototype.COMMA_DELIMITED_SEQUENCES = function() {
    return this.getToken(FSHParser.COMMA_DELIMITED_SEQUENCES, 0);
};

VsFromValuesetContext.prototype.KW_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_AND);
    } else {
        return this.getToken(FSHParser.KW_AND, i);
    }
};


VsFromValuesetContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsFromValueset(this);
	}
};

VsFromValuesetContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsFromValueset(this);
	}
};

VsFromValuesetContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsFromValueset(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsFromValuesetContext = VsFromValuesetContext;

FSHParser.prototype.vsFromValueset = function() {

    var localctx = new VsFromValuesetContext(this, this._ctx, this.state);
    this.enterRule(localctx, 100, FSHParser.RULE_vsFromValueset);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 533;
        this.match(FSHParser.KW_VSREFERENCE);
        this.state = 543;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.SEQUENCE:
            this.state = 538;
            this._errHandler.sync(this);
            var _alt = this._interp.adaptivePredict(this._input,55,this._ctx)
            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
                if(_alt===1) {
                    this.state = 534;
                    this.match(FSHParser.SEQUENCE);
                    this.state = 535;
                    this.match(FSHParser.KW_AND); 
                }
                this.state = 540;
                this._errHandler.sync(this);
                _alt = this._interp.adaptivePredict(this._input,55,this._ctx);
            }

            this.state = 541;
            this.match(FSHParser.SEQUENCE);
            break;
        case FSHParser.COMMA_DELIMITED_SEQUENCES:
            this.state = 542;
            this.match(FSHParser.COMMA_DELIMITED_SEQUENCES);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsFilterListContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsFilterList;
    return this;
}

VsFilterListContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsFilterListContext.prototype.constructor = VsFilterListContext;

VsFilterListContext.prototype.vsFilterDefinition = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(VsFilterDefinitionContext);
    } else {
        return this.getTypedRuleContext(VsFilterDefinitionContext,i);
    }
};

VsFilterListContext.prototype.KW_AND = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.KW_AND);
    } else {
        return this.getToken(FSHParser.KW_AND, i);
    }
};


VsFilterListContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsFilterList(this);
	}
};

VsFilterListContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsFilterList(this);
	}
};

VsFilterListContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsFilterList(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsFilterListContext = VsFilterListContext;

FSHParser.prototype.vsFilterList = function() {

    var localctx = new VsFilterListContext(this, this._ctx, this.state);
    this.enterRule(localctx, 102, FSHParser.RULE_vsFilterList);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 550;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,57,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 545;
                this.vsFilterDefinition();
                this.state = 546;
                this.match(FSHParser.KW_AND); 
            }
            this.state = 552;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,57,this._ctx);
        }

        this.state = 553;
        this.vsFilterDefinition();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsFilterDefinitionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsFilterDefinition;
    return this;
}

VsFilterDefinitionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsFilterDefinitionContext.prototype.constructor = VsFilterDefinitionContext;

VsFilterDefinitionContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

VsFilterDefinitionContext.prototype.vsFilterOperator = function() {
    return this.getTypedRuleContext(VsFilterOperatorContext,0);
};

VsFilterDefinitionContext.prototype.vsFilterValue = function() {
    return this.getTypedRuleContext(VsFilterValueContext,0);
};

VsFilterDefinitionContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsFilterDefinition(this);
	}
};

VsFilterDefinitionContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsFilterDefinition(this);
	}
};

VsFilterDefinitionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsFilterDefinition(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsFilterDefinitionContext = VsFilterDefinitionContext;

FSHParser.prototype.vsFilterDefinition = function() {

    var localctx = new VsFilterDefinitionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 104, FSHParser.RULE_vsFilterDefinition);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 555;
        this.match(FSHParser.SEQUENCE);
        this.state = 556;
        this.vsFilterOperator();
        this.state = 558;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(((((_la - 39)) & ~0x1f) == 0 && ((1 << (_la - 39)) & ((1 << (FSHParser.KW_TRUE - 39)) | (1 << (FSHParser.KW_FALSE - 39)) | (1 << (FSHParser.STRING - 39)) | (1 << (FSHParser.CODE - 39)) | (1 << (FSHParser.REGEX - 39)))) !== 0)) {
            this.state = 557;
            this.vsFilterValue();
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsFilterOperatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsFilterOperator;
    return this;
}

VsFilterOperatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsFilterOperatorContext.prototype.constructor = VsFilterOperatorContext;

VsFilterOperatorContext.prototype.EQUAL = function() {
    return this.getToken(FSHParser.EQUAL, 0);
};

VsFilterOperatorContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

VsFilterOperatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsFilterOperator(this);
	}
};

VsFilterOperatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsFilterOperator(this);
	}
};

VsFilterOperatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsFilterOperator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsFilterOperatorContext = VsFilterOperatorContext;

FSHParser.prototype.vsFilterOperator = function() {

    var localctx = new VsFilterOperatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 106, FSHParser.RULE_vsFilterOperator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 560;
        _la = this._input.LA(1);
        if(!(_la===FSHParser.EQUAL || _la===FSHParser.SEQUENCE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function VsFilterValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_vsFilterValue;
    return this;
}

VsFilterValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
VsFilterValueContext.prototype.constructor = VsFilterValueContext;

VsFilterValueContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

VsFilterValueContext.prototype.KW_TRUE = function() {
    return this.getToken(FSHParser.KW_TRUE, 0);
};

VsFilterValueContext.prototype.KW_FALSE = function() {
    return this.getToken(FSHParser.KW_FALSE, 0);
};

VsFilterValueContext.prototype.REGEX = function() {
    return this.getToken(FSHParser.REGEX, 0);
};

VsFilterValueContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

VsFilterValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterVsFilterValue(this);
	}
};

VsFilterValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitVsFilterValue(this);
	}
};

VsFilterValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitVsFilterValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.VsFilterValueContext = VsFilterValueContext;

FSHParser.prototype.vsFilterValue = function() {

    var localctx = new VsFilterValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 108, FSHParser.RULE_vsFilterValue);
    try {
        this.state = 567;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.CODE:
            this.enterOuterAlt(localctx, 1);
            this.state = 562;
            this.code();
            break;
        case FSHParser.KW_TRUE:
            this.enterOuterAlt(localctx, 2);
            this.state = 563;
            this.match(FSHParser.KW_TRUE);
            break;
        case FSHParser.KW_FALSE:
            this.enterOuterAlt(localctx, 3);
            this.state = 564;
            this.match(FSHParser.KW_FALSE);
            break;
        case FSHParser.REGEX:
            this.enterOuterAlt(localctx, 4);
            this.state = 565;
            this.match(FSHParser.REGEX);
            break;
        case FSHParser.STRING:
            this.enterOuterAlt(localctx, 5);
            this.state = 566;
            this.match(FSHParser.STRING);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_path;
    return this;
}

PathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathContext.prototype.constructor = PathContext;

PathContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

PathContext.prototype.KW_SYSTEM = function() {
    return this.getToken(FSHParser.KW_SYSTEM, 0);
};

PathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterPath(this);
	}
};

PathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitPath(this);
	}
};

PathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.PathContext = PathContext;

FSHParser.prototype.path = function() {

    var localctx = new PathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 110, FSHParser.RULE_path);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 569;
        _la = this._input.LA(1);
        if(!(_la===FSHParser.KW_SYSTEM || _la===FSHParser.SEQUENCE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PathsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_paths;
    return this;
}

PathsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PathsContext.prototype.constructor = PathsContext;

PathsContext.prototype.COMMA_DELIMITED_SEQUENCES = function() {
    return this.getToken(FSHParser.COMMA_DELIMITED_SEQUENCES, 0);
};

PathsContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterPaths(this);
	}
};

PathsContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitPaths(this);
	}
};

PathsContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitPaths(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.PathsContext = PathsContext;

FSHParser.prototype.paths = function() {

    var localctx = new PathsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 112, FSHParser.RULE_paths);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 571;
        this.match(FSHParser.COMMA_DELIMITED_SEQUENCES);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CaretPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_caretPath;
    return this;
}

CaretPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CaretPathContext.prototype.constructor = CaretPathContext;

CaretPathContext.prototype.CARET_SEQUENCE = function() {
    return this.getToken(FSHParser.CARET_SEQUENCE, 0);
};

CaretPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCaretPath(this);
	}
};

CaretPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCaretPath(this);
	}
};

CaretPathContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCaretPath(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CaretPathContext = CaretPathContext;

FSHParser.prototype.caretPath = function() {

    var localctx = new CaretPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 114, FSHParser.RULE_caretPath);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 573;
        this.match(FSHParser.CARET_SEQUENCE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function FlagContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_flag;
    return this;
}

FlagContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FlagContext.prototype.constructor = FlagContext;

FlagContext.prototype.KW_MOD = function() {
    return this.getToken(FSHParser.KW_MOD, 0);
};

FlagContext.prototype.KW_MS = function() {
    return this.getToken(FSHParser.KW_MS, 0);
};

FlagContext.prototype.KW_SU = function() {
    return this.getToken(FSHParser.KW_SU, 0);
};

FlagContext.prototype.KW_TU = function() {
    return this.getToken(FSHParser.KW_TU, 0);
};

FlagContext.prototype.KW_NORMATIVE = function() {
    return this.getToken(FSHParser.KW_NORMATIVE, 0);
};

FlagContext.prototype.KW_DRAFT = function() {
    return this.getToken(FSHParser.KW_DRAFT, 0);
};

FlagContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterFlag(this);
	}
};

FlagContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitFlag(this);
	}
};

FlagContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitFlag(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.FlagContext = FlagContext;

FSHParser.prototype.flag = function() {

    var localctx = new FlagContext(this, this._ctx, this.state);
    this.enterRule(localctx, 116, FSHParser.RULE_flag);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 575;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_MOD) | (1 << FSHParser.KW_MS) | (1 << FSHParser.KW_SU) | (1 << FSHParser.KW_TU) | (1 << FSHParser.KW_NORMATIVE) | (1 << FSHParser.KW_DRAFT))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function StrengthContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_strength;
    return this;
}

StrengthContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StrengthContext.prototype.constructor = StrengthContext;

StrengthContext.prototype.KW_EXAMPLE = function() {
    return this.getToken(FSHParser.KW_EXAMPLE, 0);
};

StrengthContext.prototype.KW_PREFERRED = function() {
    return this.getToken(FSHParser.KW_PREFERRED, 0);
};

StrengthContext.prototype.KW_EXTENSIBLE = function() {
    return this.getToken(FSHParser.KW_EXTENSIBLE, 0);
};

StrengthContext.prototype.KW_REQUIRED = function() {
    return this.getToken(FSHParser.KW_REQUIRED, 0);
};

StrengthContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterStrength(this);
	}
};

StrengthContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitStrength(this);
	}
};

StrengthContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitStrength(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.StrengthContext = StrengthContext;

FSHParser.prototype.strength = function() {

    var localctx = new StrengthContext(this, this._ctx, this.state);
    this.enterRule(localctx, 118, FSHParser.RULE_strength);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 577;
        _la = this._input.LA(1);
        if(!(((((_la - 29)) & ~0x1f) == 0 && ((1 << (_la - 29)) & ((1 << (FSHParser.KW_EXAMPLE - 29)) | (1 << (FSHParser.KW_PREFERRED - 29)) | (1 << (FSHParser.KW_EXTENSIBLE - 29)) | (1 << (FSHParser.KW_REQUIRED - 29)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ValueContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_value;
    return this;
}

ValueContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ValueContext.prototype.constructor = ValueContext;

ValueContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

ValueContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

ValueContext.prototype.MULTILINE_STRING = function() {
    return this.getToken(FSHParser.MULTILINE_STRING, 0);
};

ValueContext.prototype.NUMBER = function() {
    return this.getToken(FSHParser.NUMBER, 0);
};

ValueContext.prototype.DATETIME = function() {
    return this.getToken(FSHParser.DATETIME, 0);
};

ValueContext.prototype.TIME = function() {
    return this.getToken(FSHParser.TIME, 0);
};

ValueContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

ValueContext.prototype.canonical = function() {
    return this.getTypedRuleContext(CanonicalContext,0);
};

ValueContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

ValueContext.prototype.quantity = function() {
    return this.getTypedRuleContext(QuantityContext,0);
};

ValueContext.prototype.ratio = function() {
    return this.getTypedRuleContext(RatioContext,0);
};

ValueContext.prototype.bool = function() {
    return this.getTypedRuleContext(BoolContext,0);
};

ValueContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterValue(this);
	}
};

ValueContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitValue(this);
	}
};

ValueContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitValue(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ValueContext = ValueContext;

FSHParser.prototype.value = function() {

    var localctx = new ValueContext(this, this._ctx, this.state);
    this.enterRule(localctx, 120, FSHParser.RULE_value);
    try {
        this.state = 591;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,60,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 579;
            this.match(FSHParser.SEQUENCE);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 580;
            this.match(FSHParser.STRING);
            break;

        case 3:
            this.enterOuterAlt(localctx, 3);
            this.state = 581;
            this.match(FSHParser.MULTILINE_STRING);
            break;

        case 4:
            this.enterOuterAlt(localctx, 4);
            this.state = 582;
            this.match(FSHParser.NUMBER);
            break;

        case 5:
            this.enterOuterAlt(localctx, 5);
            this.state = 583;
            this.match(FSHParser.DATETIME);
            break;

        case 6:
            this.enterOuterAlt(localctx, 6);
            this.state = 584;
            this.match(FSHParser.TIME);
            break;

        case 7:
            this.enterOuterAlt(localctx, 7);
            this.state = 585;
            this.reference();
            break;

        case 8:
            this.enterOuterAlt(localctx, 8);
            this.state = 586;
            this.canonical();
            break;

        case 9:
            this.enterOuterAlt(localctx, 9);
            this.state = 587;
            this.code();
            break;

        case 10:
            this.enterOuterAlt(localctx, 10);
            this.state = 588;
            this.quantity();
            break;

        case 11:
            this.enterOuterAlt(localctx, 11);
            this.state = 589;
            this.ratio();
            break;

        case 12:
            this.enterOuterAlt(localctx, 12);
            this.state = 590;
            this.bool();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ItemContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_item;
    return this;
}

ItemContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ItemContext.prototype.constructor = ItemContext;

ItemContext.prototype.SEQUENCE = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(FSHParser.SEQUENCE);
    } else {
        return this.getToken(FSHParser.SEQUENCE, i);
    }
};


ItemContext.prototype.CARD = function() {
    return this.getToken(FSHParser.CARD, 0);
};

ItemContext.prototype.KW_NAMED = function() {
    return this.getToken(FSHParser.KW_NAMED, 0);
};

ItemContext.prototype.flag = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(FlagContext);
    } else {
        return this.getTypedRuleContext(FlagContext,i);
    }
};

ItemContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterItem(this);
	}
};

ItemContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitItem(this);
	}
};

ItemContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitItem(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ItemContext = ItemContext;

FSHParser.prototype.item = function() {

    var localctx = new ItemContext(this, this._ctx, this.state);
    this.enterRule(localctx, 122, FSHParser.RULE_item);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 593;
        this.match(FSHParser.SEQUENCE);
        this.state = 596;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.KW_NAMED) {
            this.state = 594;
            this.match(FSHParser.KW_NAMED);
            this.state = 595;
            this.match(FSHParser.SEQUENCE);
        }

        this.state = 598;
        this.match(FSHParser.CARD);
        this.state = 602;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FSHParser.KW_MOD) | (1 << FSHParser.KW_MS) | (1 << FSHParser.KW_SU) | (1 << FSHParser.KW_TU) | (1 << FSHParser.KW_NORMATIVE) | (1 << FSHParser.KW_DRAFT))) !== 0)) {
            this.state = 599;
            this.flag();
            this.state = 604;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CodeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_code;
    return this;
}

CodeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CodeContext.prototype.constructor = CodeContext;

CodeContext.prototype.CODE = function() {
    return this.getToken(FSHParser.CODE, 0);
};

CodeContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

CodeContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCode(this);
	}
};

CodeContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCode(this);
	}
};

CodeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCode(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CodeContext = CodeContext;

FSHParser.prototype.code = function() {

    var localctx = new CodeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 124, FSHParser.RULE_code);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 605;
        this.match(FSHParser.CODE);
        this.state = 607;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
        if(la_===1) {
            this.state = 606;
            this.match(FSHParser.STRING);

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ConceptContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_concept;
    return this;
}

ConceptContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ConceptContext.prototype.constructor = ConceptContext;

ConceptContext.prototype.STAR = function() {
    return this.getToken(FSHParser.STAR, 0);
};

ConceptContext.prototype.code = function() {
    return this.getTypedRuleContext(CodeContext,0);
};

ConceptContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

ConceptContext.prototype.MULTILINE_STRING = function() {
    return this.getToken(FSHParser.MULTILINE_STRING, 0);
};

ConceptContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterConcept(this);
	}
};

ConceptContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitConcept(this);
	}
};

ConceptContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitConcept(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ConceptContext = ConceptContext;

FSHParser.prototype.concept = function() {

    var localctx = new ConceptContext(this, this._ctx, this.state);
    this.enterRule(localctx, 126, FSHParser.RULE_concept);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 609;
        this.match(FSHParser.STAR);
        this.state = 610;
        this.code();
        this.state = 612;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.STRING || _la===FSHParser.MULTILINE_STRING) {
            this.state = 611;
            _la = this._input.LA(1);
            if(!(_la===FSHParser.STRING || _la===FSHParser.MULTILINE_STRING)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function QuantityContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_quantity;
    return this;
}

QuantityContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
QuantityContext.prototype.constructor = QuantityContext;

QuantityContext.prototype.NUMBER = function() {
    return this.getToken(FSHParser.NUMBER, 0);
};

QuantityContext.prototype.UNIT = function() {
    return this.getToken(FSHParser.UNIT, 0);
};

QuantityContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterQuantity(this);
	}
};

QuantityContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitQuantity(this);
	}
};

QuantityContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitQuantity(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.QuantityContext = QuantityContext;

FSHParser.prototype.quantity = function() {

    var localctx = new QuantityContext(this, this._ctx, this.state);
    this.enterRule(localctx, 128, FSHParser.RULE_quantity);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 614;
        this.match(FSHParser.NUMBER);
        this.state = 615;
        this.match(FSHParser.UNIT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RatioContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_ratio;
    return this;
}

RatioContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RatioContext.prototype.constructor = RatioContext;

RatioContext.prototype.ratioPart = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(RatioPartContext);
    } else {
        return this.getTypedRuleContext(RatioPartContext,i);
    }
};

RatioContext.prototype.COLON = function() {
    return this.getToken(FSHParser.COLON, 0);
};

RatioContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterRatio(this);
	}
};

RatioContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitRatio(this);
	}
};

RatioContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitRatio(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.RatioContext = RatioContext;

FSHParser.prototype.ratio = function() {

    var localctx = new RatioContext(this, this._ctx, this.state);
    this.enterRule(localctx, 130, FSHParser.RULE_ratio);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 617;
        this.ratioPart();
        this.state = 618;
        this.match(FSHParser.COLON);
        this.state = 619;
        this.ratioPart();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function ReferenceContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_reference;
    return this;
}

ReferenceContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ReferenceContext.prototype.constructor = ReferenceContext;

ReferenceContext.prototype.OR_REFERENCE = function() {
    return this.getToken(FSHParser.OR_REFERENCE, 0);
};

ReferenceContext.prototype.PIPE_REFERENCE = function() {
    return this.getToken(FSHParser.PIPE_REFERENCE, 0);
};

ReferenceContext.prototype.STRING = function() {
    return this.getToken(FSHParser.STRING, 0);
};

ReferenceContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterReference(this);
	}
};

ReferenceContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitReference(this);
	}
};

ReferenceContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitReference(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.ReferenceContext = ReferenceContext;

FSHParser.prototype.reference = function() {

    var localctx = new ReferenceContext(this, this._ctx, this.state);
    this.enterRule(localctx, 132, FSHParser.RULE_reference);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 621;
        _la = this._input.LA(1);
        if(!(_la===FSHParser.OR_REFERENCE || _la===FSHParser.PIPE_REFERENCE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 623;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===FSHParser.STRING) {
            this.state = 622;
            this.match(FSHParser.STRING);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function CanonicalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_canonical;
    return this;
}

CanonicalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
CanonicalContext.prototype.constructor = CanonicalContext;

CanonicalContext.prototype.CANONICAL = function() {
    return this.getToken(FSHParser.CANONICAL, 0);
};

CanonicalContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterCanonical(this);
	}
};

CanonicalContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitCanonical(this);
	}
};

CanonicalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitCanonical(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.CanonicalContext = CanonicalContext;

FSHParser.prototype.canonical = function() {

    var localctx = new CanonicalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 134, FSHParser.RULE_canonical);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 625;
        this.match(FSHParser.CANONICAL);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function RatioPartContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_ratioPart;
    return this;
}

RatioPartContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RatioPartContext.prototype.constructor = RatioPartContext;

RatioPartContext.prototype.NUMBER = function() {
    return this.getToken(FSHParser.NUMBER, 0);
};

RatioPartContext.prototype.quantity = function() {
    return this.getTypedRuleContext(QuantityContext,0);
};

RatioPartContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterRatioPart(this);
	}
};

RatioPartContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitRatioPart(this);
	}
};

RatioPartContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitRatioPart(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.RatioPartContext = RatioPartContext;

FSHParser.prototype.ratioPart = function() {

    var localctx = new RatioPartContext(this, this._ctx, this.state);
    this.enterRule(localctx, 136, FSHParser.RULE_ratioPart);
    try {
        this.state = 629;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,66,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 627;
            this.match(FSHParser.NUMBER);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 628;
            this.quantity();
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function BoolContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_bool;
    return this;
}

BoolContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BoolContext.prototype.constructor = BoolContext;

BoolContext.prototype.KW_TRUE = function() {
    return this.getToken(FSHParser.KW_TRUE, 0);
};

BoolContext.prototype.KW_FALSE = function() {
    return this.getToken(FSHParser.KW_FALSE, 0);
};

BoolContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterBool(this);
	}
};

BoolContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitBool(this);
	}
};

BoolContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitBool(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.BoolContext = BoolContext;

FSHParser.prototype.bool = function() {

    var localctx = new BoolContext(this, this._ctx, this.state);
    this.enterRule(localctx, 138, FSHParser.RULE_bool);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 631;
        _la = this._input.LA(1);
        if(!(_la===FSHParser.KW_TRUE || _la===FSHParser.KW_FALSE)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function TargetTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = FSHParser.RULE_targetType;
    return this;
}

TargetTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
TargetTypeContext.prototype.constructor = TargetTypeContext;

TargetTypeContext.prototype.SEQUENCE = function() {
    return this.getToken(FSHParser.SEQUENCE, 0);
};

TargetTypeContext.prototype.reference = function() {
    return this.getTypedRuleContext(ReferenceContext,0);
};

TargetTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.enterTargetType(this);
	}
};

TargetTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof FSHListener ) {
        listener.exitTargetType(this);
	}
};

TargetTypeContext.prototype.accept = function(visitor) {
    if ( visitor instanceof FSHVisitor ) {
        return visitor.visitTargetType(this);
    } else {
        return visitor.visitChildren(this);
    }
};




FSHParser.TargetTypeContext = TargetTypeContext;

FSHParser.prototype.targetType = function() {

    var localctx = new TargetTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 140, FSHParser.RULE_targetType);
    try {
        this.state = 635;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case FSHParser.SEQUENCE:
            this.enterOuterAlt(localctx, 1);
            this.state = 633;
            this.match(FSHParser.SEQUENCE);
            break;
        case FSHParser.OR_REFERENCE:
        case FSHParser.PIPE_REFERENCE:
            this.enterOuterAlt(localctx, 2);
            this.state = 634;
            this.reference();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.FSHParser = FSHParser;
