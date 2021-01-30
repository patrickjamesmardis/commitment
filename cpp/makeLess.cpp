#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
using namespace std;

int main(int argc, char* argv[])
{
    ifstream fin(argv[1]);
    string line;
    string colors[100][100];
    int count = 1;
    if (fin.is_open()) {
        ofstream fout("less/main.less");
        fout << "@orange: #FF5A36;\n@blue : #19647E;\n@gray : #B2ABBF;\n@yellow : #EDEEC9;\n@black : #090909;\n";
        while (getline(fin, line)) {
            stringstream lineStream(line);
            string data;
            for (int i = 1; i < 101; i++) {
                getline(lineStream, data, ',');
                fout << "#row" << count << " .pixel" << i << "{\n\tbackground-color: @";
                if (data == "g")
                    fout << "gray;\n}";
                else if (data == "o")
                    fout << "orange;\n}";
                else if (data == "b")
                    fout << "blue;\n}";
                else if (data == "y")
                    fout << "yellow;\n}";
                else
                    fout << "black;\n}";
            }
            count++;
        }
    } else {
        cout << "File cannot be opened." << endl;
        return -1;
    }

    for (int i = 1; i < 101; i++) {
    }
    return 0;
}
