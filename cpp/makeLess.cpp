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
        fout << "@blue1: #102940;\n@blue2 : #4F738D;\n@blue3 : #6EB1CC;\n@blue4 : #93C9d8;\n@blue5 : #D3F0EB;\n";
        while (getline(fin, line)) {
            stringstream lineStream(line);
            string data;
            for (int i = 1; i < 101; i++) {
                getline(lineStream, data, ',');
                fout << "#row" << count << " .pixel" << i << "{\n\tbackground-color: @";
                if (data == "g")
                    fout << "blue1;\n}";
                else if (data == "o")
                    fout << "blue2;\n}";
                else if (data == "b")
                    fout << "blue3;\n}";
                else if (data == "y")
                    fout << "blue4;\n}";
                else
                    fout << "blue5;\n}";
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
