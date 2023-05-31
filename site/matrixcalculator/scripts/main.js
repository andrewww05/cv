let matrix = {
    determine2x2(a11,a12,a21,a22) {
        let determined = ((a11*a22)-(a12*a21));
        return determined;
      },
    getValues() {
        a1 = document.getElementById("a1").value;
        a2 = document.getElementById("a2").value;
        a3 = document.getElementById("a3").value;
        b1 = document.getElementById("b1").value;
        b2 = document.getElementById("b2").value;
        b3 = document.getElementById("b3").value;
        c1 = document.getElementById("c1").value;
        c2 = document.getElementById("c2").value;
        c3 = document.getElementById("c3").value;
    },
    determine3x3(statement) {
        matrix.getValues();
        a2*=-1;
        b1*=-1;
        b3*=-1;
        c2*=-1;
        value1 = (a1*((b2*c3)-(b3*c2)));
        value2 = (-1*a2)*((b1*c3)-(b3*c1));
        value3 = a3*((b1*c2 )-(b2*c1));
        total = value1+value2+value3;
        if (statement == 1) document.getElementById("total").innerHTML = `|M|=${total}`;
    },
    findInvertedMatrix(){
        matrix.determine3x3(0);
        let A1, A2, A3,
            B1, B2, B3,
            C1, C2, C3;
        a2*=-1;
        b1*=-1;
        b3*=-1;
        c2*=-1;
        value1 = (a1*((b2*c3)-(b3*c2)));
        value2 = (-1*a2)*((b1*c3)-(b3*c1));
        value3 = a3*((b1*c2 )-(b2*c1));
        determined3 = value1+value2+value3;
        a2*=-1;
        b1*=-1;
        b3*=-1;
        c2*=-1;
        A1=a1; A2=b1; A3=c1;
        B1=a2; B2=b2; B3=c2;
        C1=a3; C2=b3; C3=c3;
        let det1 = matrix.determine2x2(B2,B3,C2,C3);
        let det2 = matrix.determine2x2(B1,B3,C1,C3);
        let det3 = matrix.determine2x2(B1,B2,C1,C2);
        let det4 = matrix.determine2x2(A2,A3,C2,C3);
        let det5 = matrix.determine2x2(A1,A3,C1,C3);
        let det6 = matrix.determine2x2(A1,A2,C1,C2);
        let det7 = matrix.determine2x2(A2,A3,B2,B3);
        let det8 = matrix.determine2x2(A1,A3,B1,B3);
        let det9 = matrix.determine2x2(A1,A2,B1,B2);
        det2*=-1;
        det4*=-1;
        det6*=-1;
        det8*=-1;
        invtotal=invFormula(determined3, det1);
        invtotal=invFormula(determined3, det2);
        invtotal=invFormula(determined3, det3);
        invtotal=invFormula(determined3, det4);
        invtotal=invFormula(determined3, det5);
        invtotal=invFormula(determined3, det6);
        invtotal=invFormula(determined3, det7);
        invtotal=invFormula(determined3, det8);
        invtotal=invFormula(determined3, det9);
        document.getElementById("inv1").innerHTML = det1;
        document.getElementById("inv2").innerHTML = det2;
        document.getElementById("inv3").innerHTML = det3;
        document.getElementById("inv4").innerHTML = det4;
        document.getElementById("inv5").innerHTML = det5;
        document.getElementById("inv6").innerHTML = det6;
        document.getElementById("inv7").innerHTML = det7;
        document.getElementById("inv8").innerHTML = det8;
        document.getElementById("inv9").innerHTML = det9;
        document.getElementById("determined").style.display = "flex";
        function invFormula(detM, AdjM){ let invFormula = ((1/detM)*AdjM); return invFormula; }
    }
}