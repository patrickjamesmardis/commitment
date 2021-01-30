// quick cpp program to print 100 section tags with class name and ids to a .txt file to copy into index.html

#include <fstream>
#include <iostream>
using namespace std;
int main()
{
    ofstream fout("rows.txt");
    for (int i = 1; i < 101; i++) {
        fout << "<section class=\"row\" id=\"row" << i << "\"></section>\n";
    }
    fout.close();
    return 0;
}